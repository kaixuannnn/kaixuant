import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const Skills =()=>{
    const [element, controls] = useScroll();
    return (
        <StyledSkills>
            <h2>Skills</h2>
            <SkillBlocks variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}>
                <Skill>
                    <h3>Languages</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML/EJS</li>
                            <li>CSS/Sass</li>
                        </ul>
                </Skill>
                <Skill>
                <h3>Frameworks</h3>
                    <ul>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                    </ul>
                    </Skill>
                <Skill>
                    <h3>Design</h3>
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe XD</li>
                        <li>Figma</li>
                    </ul>
                    </Skill>
                <Skill>
                    <h3>Tools</h3>
                    <ul>
                        <li>Chrome Dev</li>
                        <li>Git/GitHub</li>
                        <li>Unix Command Line</li>
                        <li>Postman</li>
                    </ul>
                </Skill>
            </SkillBlocks>
        </StyledSkills>
    )
}

const StyledSkills= styled(motion.div)`
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5rem ;
    background-color: #404040;
    color: white;
    h2{
        margin-right: 3rem;
    }
    @media screen and (max-width: 1051px){
        display: block;
        padding: 3rem;
    }
    @media screen and (max-width: 700px){
        font-size: 1rem;
    }
    `
    
const SkillBlocks = styled(motion.div)`
    display: flex;
    @media screen and (max-width: 700px){
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(120px, 1fr));
    }`


const Skill = styled.div`
    flex:1;
    padding-right: 3rem;
    h3{
        margin-bottom: 0.5rem;
    }
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li{
        padding-bottom: 0.5rem;
    }
    @media screen and (max-width: 700px){
        h3{
            padding-bottom: 0.3rem;
            padding-top: 0.5rem;
        }
    }
    `


export default Skills;