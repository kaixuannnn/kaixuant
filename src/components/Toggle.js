import React,{useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

const Toggle =({title, description, children,picture})=>{
    const [toggle, setToggle] = useState(false);
    const [hover, setHover] = useState(false);
    return(
        <Frame>
        <Project>
                <div className="image" onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}>
                    <img src={picture} alt=""/>
                    {hover && 
                    (<a href="/">Go Live</a>)}
                </div>
                <div className="des">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {toggle ? children : ""}
                </div>
        </Project>
        <div className="showMore">
            <FontAwesomeIcon classname="icon" icon={toggle ? faAngleUp : faAngleDown} size="lg" style={{cursor:"pointer"}} onClick={() => setToggle(!toggle)}/>
        </div>
        </Frame>

    )
}
const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Project = styled.div`
    display: flex;
    .image{
        flex:1;
        overflow: hidden;
        position: relative;
    img { 
        height: 30vh;
        width:100%;
        object-fit:cover;
    }
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
        padding: 1rem;
    }
    @media screen and (max-width: 700px){
        .image{
            display:none
        }}
`
export default Toggle;