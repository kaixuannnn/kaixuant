import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import YelpCamp from '../assets/YelpCamp.PNG';
import MusicPlayer from '../assets/MusicPlayer.PNG'

const Projects =()=>{
    return(
        <StyledProjects>
            <h1>My Projects</h1>
            <Toggle title="YelpCamp Application" description="A fullstack application mainly architected by HTML, CSS, NodeJS, ExpressJS, Passport, MongoDB and so on." picture={YelpCamp}>
                <Details>
                    <p>Github :</p>
                    <p>Live: </p>
                </Details>
            </Toggle>
            <div className="line"></div>
            <Toggle title="Music Player" description="A small music player application architected by ReactJS." picture={MusicPlayer}>
                <Details>
                    <p>Github :</p>
                    <p>Live: </p>
                </Details>
            </Toggle>
            <div className="line"></div>
        </StyledProjects>
    )
}

const StyledProjects = styled.div`
    display: block;
    padding: 5rem 10rem;
    .line{
        background: #858585;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    `
const Details = styled.div``

export default Projects;