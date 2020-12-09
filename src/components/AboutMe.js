import React from 'react';
import myPhoto from '../assets/kaixuan.jpg';
import styled from 'styled-components';

const AboutMe = () =>{
    return(
        <About>
        <Desc>
            <h1>Tan Kai Xuan</h1>
            <p>An Engineering Fresh Graduate who is passionate in internet industry, enthusiastic in creating things on
              internet. Have been learning web development and coding for years, and always eager to learn more in this
              fast-paced industry..</p>
        </Desc>
        <Image>
            <img src={myPhoto} alt="myphoto"/>
        </Image>
        </About>
    )
}

const About = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    text-align: center;
    padding: 5rem 10rem;
    @media screen and (max-width: 1051px){
    padding: 2rem 3rem;
    display: block;
    }
    @media screen and (max-width: 700px){
        padding: 1rem 1rem;
    }
    `
const Desc =styled.div`
    flex:1;
    padding-right: 5rem;
    p{
        font-size:1.2rem;
    }
    @media screen and (max-width: 1051px){
    padding: 2rem 3rem;
    text-align: center;
    }
    @media screen and (max-width: 700px){
        h1{
            font-size: larger
        }
        p{
            font-size: 1rem;
        }
    }
    `
const Image =styled.div`
    flex:1;
    overflow: hidden;
    img { 
        height: 60vh;
        width:100%;
        object-fit:cover;
    }`   
export default AboutMe