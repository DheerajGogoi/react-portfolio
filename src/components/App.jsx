import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import BottomBar from './BottomBar'
import Experience from './Experience';

function App() {

    return (
        <div>
            <Navbar />
            <Home />
            <AboutMe />
            <Skills />
            <Projects />
            <Experience />
            <ContactMe />
            <BottomBar />
        </div>
    );
}

export default App;