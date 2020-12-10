import React from 'react';
import styled from "styled-components";
import {motion} from 'framer-motion';
import {titleAnim, fade} from '../animation';

const Cover =()=>{
    return (
        <StyledCover>
            <motion.h1 variants={titleAnim} initial='hidden' animate='show'>Hi! I am Kai Xuan.</motion.h1>
             <motion.p variants={fade} initial='hidden' animate='show'> A MERN stack Web Developer focused on building beautiful, effecient interfaces & experiences :)</motion.p>
             <div className="buttons">
             <a href='../assets/KaiXuanResume.pdf' download="KaiXuanResume.pdf">My Resume</a>
             <a href="https://github.com/kaixuannnn" target="_blank" rel="noreferrer">My Projects</a>
             </div>
        </StyledCover>
    )
}

const StyledCover =styled(motion.div)`
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