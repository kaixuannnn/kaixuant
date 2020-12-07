import React from 'react';

import styled from "styled-components";

const Cover =()=>{
    return (
        <StyledCover>
            <h1>Hi! I am Kai Xuan.</h1>
             <p> A Front-End Developer focused on building beautiful interfaces & experiences :)</p>
             <div className="buttons">
             <button>Resume</button>
             <button>My Projects</button>
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
    button{
        margin: 0.5rem;
    }}
    `

export default Cover;