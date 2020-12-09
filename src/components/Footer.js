import React from 'react';
import styled from 'styled-components';

const Footer = () =>{
    return(
        <StyledNav>
            <p>
                <span>Designed & Developed</span>
                <span> by Kai Xuan :)</span> 
            </p>
            <ul>
                <li><a href="/">Email</a></li>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Github</a></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    z-index:10;
    ul{
        display:flex;
        list-style: none;
    }
    a{
        border: none;
        font-weight: bold;
        &:hover{
            text-shadow: 0px 1px 2px grey;
            background: none;
            color: #404040; 
        }
        
    }
    p{
        font-weight: bold;
        span{
            display: block;
        }
    }
    @media screen and (max-width: 1051px){
        display: block;
        text-align: center;
        p{
        padding-bottom: 0.5rem;
        }
        ul{
            display:flex;
            justify-content: space-around;
        }
    }
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem;
        min-height: 40vh;
        font-size: 1rem;
        background: #b2b2b2;
        ul{
            display: inline-block;
            text-align:center;
        }
        p{
            span{
                display: inline;
            }
        }
    }
    `

export default Footer;