import React,{useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion';

const Toggle =({title, description, children,picture})=>{
    const [toggle, setToggle] = useState(false);
    const [hover, setHover] = useState(false);
    return(
        <Frame>
        <Project>
                <motion.div layout className="image" onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}>
                    <img className={toggle ? "afterToggle": ""} src={picture} alt=""/>
                    {hover && 
                    (<a href="/">Go Live</a>)}
                </motion.div>
                <motion.div layout className="des">
                    <motion.h2 layout>{title}</motion.h2>
                    <motion.p layout>{description}</motion.p>
                    {toggle ? children : ""}
                </motion.div>
        </Project>
        <motion.div layout className="showMore">
            <FontAwesomeIcon classname="icon" icon={toggle ? faAngleUp : faAngleDown} size="lg" style={{cursor:"pointer"}} onClick={() => setToggle(!toggle)}/>
        </motion.div>
        <motion.div layout className="line"></motion.div>
        </Frame>

    )
}
const Frame = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    .line{
        background: #858585;
        height: 0.2rem;
        margin: 1rem 0rem;
        width: 100%;
    }
`
const Project = styled(motion.div)`
    display: flex;
    .image{
        flex:1;
        min-height: 30vh;
        overflow: hidden;
        position: relative;
        border-radius: 10px;
        box-shadow: 0px 0px 8px lightgrey;
    img { 
        height: 100%;
        width:100%;
        object-fit:cover;
    }
    /* .afterToggle{
        height: 100% !important;
    } */
    &:hover{
        opacity: 0.7;
        transition: all 0.5s ease;    }
    a{
        position:absolute;
        z-index:3;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
    }
    .des{
        flex: 3;
        padding: 1.5rem;
        h2{
            padding-top: 0px;
        }
    }
    @media screen and (max-width: 700px){
        .image{
            display:none
        }}
`
export default Toggle;