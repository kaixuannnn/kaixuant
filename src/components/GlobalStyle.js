import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
    font-size: 1.2rem;
    letter-spacing: 0.3px;
    
    h1{
        padding: 1.5rem;
    }
    h2{
        padding: 1rem;
    }
    }
    h3{
        padding-bottom: 1rem;
    }
    p{
        color:#404040;
    }
    
    button {
    font-size: 15px;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    border: 3px solid  #404040;
    background: transparent;
    transition: all 0.5s ease;
    font-family: 'Lato';
    &:hover{
        background-color: #404040;
        color: white; 
    }

    p{
        line-height: 1.5;
    }
}

    `

export default GlobalStyle;
