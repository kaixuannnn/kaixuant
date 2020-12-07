import React from 'react';
import styled from 'styled-components';

const Nav = () =>{
    return(
        <StyledNav>
            <h1>
                Kai Xuan
            </h1>
            <ul>
                <li>About Me</li>
                <li>Skills</li>
                <li>Projects</li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 7vh;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    position: fixed;
    z-index:10;
    ul{
        display:flex;
        list-style: none;
    }
    li{
        padding-left: 7rem;
    }
    `

export default Nav;