import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import BottomBar from './BottomBar'
import Extra from './Extra';
// import ParticleBg from './ParticleBg';

function App() {

  return (
        <div>
            <Navbar />
            <Home />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
            <BottomBar />
        </div>
    );
}

export default App;