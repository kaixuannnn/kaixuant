import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import YelpCamp from '../assets/YelpCamp.PNG';
import MusicPlayer from '../assets/MusicPlayer.PNG';
import Ignite from '../assets/Ignite.PNG';
import Capture from '../assets/Capture.PNG';

const Projects =()=>{
    return(
        <StyledProjects>
            <h1>My Projects</h1>
            <Toggle title="YelpCamp Application" description="A fullstack application mainly architected by HTML, CSS, NodeJS, ExpressJS, Passport, MongoDB and so on." picture={YelpCamp}>
                <Details>
                    <Tech>
                        <p>JavaScript</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>NodeJS</p>
                        <p>ExpressJS</p>
                        <p>MongoDB</p>
                        <p>Mongoose</p>
                        <p>MapBox</p>
                    </Tech>
                    <Links>
                        <a href="https://github.com/kaixuannnn/bootcamp_yelpcamp" target="_blank">GitHub</a>
                        <a href="https://morning-harbor-95031.herokuapp.com/" target="_blank">Live</a>
                    </Links>
                </Details>
            </Toggle>
            <div className="line"></div>
            <Toggle title="Music Player" description="A small music player application architected by ReactJS." picture={MusicPlayer}>
                <Details>
                    <Tech>
                        <p>JavaScript</p>
                        <p>ReactJS</p>
                        <p>NodeSASS</p>
                        <p>State Management</p>
                        <p>React Hook</p>
                    </Tech>
                    <Links>
                        {/* <a href="/"><img src={github} alt=""></img>GitHub</a>
                        <a href="/"><img src={live} alt=""></img>Live</a> */}
                        <a href="https://github.com/kaixuannnn/musicplayer" target="_blank">GitHub</a>
                        <a href="https://kaixuannnn.github.io/musicplayer/" target="_blank">Live</a>
                    </Links>
                </Details>
            </Toggle>
            <div className="line"></div>
            <Toggle title="Capture" description="A photographer portfolio website constructed by ReactJS framworks. Involved framer-motion animation, implemented React Route." picture={Capture}>
                <Details>
                <Tech>
                        <p>JavaScript</p>
                        <p>ReactJS</p>
                        <p>StyledComponents</p>
                        <p>State Management</p>
                        <p>React Hook</p>
                        <p>Framer Motion</p>
                        <p>react-route-dom</p>
                    </Tech>
                    <Links>
                        <a href="https://github.com/kaixuannnn/capture" target="_blank">GitHub</a>
                        <a href="https://kaixuannnn.github.io/capture/" target="_blank">Live</a>
                    </Links>
                </Details>
            </Toggle>
            <div className="line"></div>
            <Toggle title="Gaming Website" description="A gaming description websites built by ReactJS, fetching data from Rawg API,utilising Redux State Management." picture={Ignite}>
                <Details>
                <Tech>
                        <p>JavaScript</p>
                        <p>ReactJS</p>
                        <p>StyledComponents</p>
                        <p>Redux State Management</p>
                        <p>React Hook</p>
                        <p>Framer Motion</p>
                        <p>react-route-dom</p>
                        <p>Axios</p>
                    </Tech>
                    <Links>
                        <a href="https://github.com/kaixuannnn/ignite" target="_blank">GitHub</a>
                        <a href="https://kaixuannnn.github.io/ignite/" target="_blank">Live</a>
                    </Links>
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
        margin: 1rem 0rem;
        width: 100%;
    }
    @media screen and (max-width: 1051px){
    padding: 2rem 3rem;
    }
    @media screen and (max-width: 700px){
        padding: 1rem;
        font-size: 1.1rem;
    }
    `
const Details = styled.div`
    padding-top: 1.5rem;`
const Tech = styled.div`
    p{
        font-size: 0.8rem;
        display: inline-block;
        padding: 0.5rem;
        margin:0.5rem 0.3rem 0 0;
        border: solid 2px #404040;
        border-radius: 10px;
    }
    `
const Links = styled.div`
    a{
        display: inline-block;
        text-decoration:none;
        background-color: #404040;
        color: white;
        padding: 1rem 2rem;
        border: solid #404040 2px;
        margin: 1rem 1rem 1rem 0rem;
        border-radius: 10px;
        box-shadow: 2px 0px 2px grey;
    }

`

export default Projects;