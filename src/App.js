import React from 'react';
import Cover from './components/Cover';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Cover />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
