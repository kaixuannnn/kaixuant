import React from 'react';
import styled from "styled-components";

const Cover =()=>{
    return (
        <StyledCover>
            <h1>Hi! I am Kai Xuan.</h1>
             <p> A Front-End Developer focused on building beautiful interfaces & experiences :)</p>
             <div className="buttons">
             <a href="https://1drv.ms/b/s!AgaMvoBPUH7ClDMzqBv3sX-CDM9A?e=Tgdb8k" target="_blank">My Resume</a>
             <a href="https://github.com/kaixuannnn" target="_blank">My Projects</a>
             </div>
        </StyledCover>
    )
}

const StyledCover =styled.div`
    min-height: 100vh;
    background-color: #bfbfbf;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding: 5rem 10rem;
    font-size: 1.5rem;
    .buttons{ 
        margin: 0.5rem;
        a{
            margin: 0.8rem;
        }
    }
    @media screen and (max-width: 1051px){
    padding: 2rem 3rem;
    text-align: center;
    }
    @media screen and (max-width: 700px){
        padding: 1rem 1rem;
        font-size: 1.2rem;
    }
    `

export default Cover;