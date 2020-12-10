import React from 'react';
import Cover from './components/Cover';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GlobalStyle from './components/GlobalStyle';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Cover />
      <AboutMe id="aboutMe"/>

      <Skills />
      <Projects />
      <Footer />
      
    </div>
  );
}

export default App;
