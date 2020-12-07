import React,{useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Toggle =({title, description, children,picture})=>{
    const [toggle, setToggle] = useState(false);
    const [hover, setHover] = useState(false);
    return(
        <Project>
                <div className="image" onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}>
                    <img src={picture} alt=""/>
                    {hover && 
                    (<button>Go Live</button>)}
                </div>
                <div className="des">
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                    <FontAwesomeIcon icon={faAngleRight} onClick={() => setToggle(!toggle)}/>
                    {toggle ? children : ""}
                </div>
        </Project>

    )
}
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
    button{
        position:absolute;
        z-index:3;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
    }
    .des{
        flex: 3;
    }
`
export default Toggle;