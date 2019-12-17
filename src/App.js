import React from 'react';
import LandingPage from './LandingPage';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


export default function App() {
    return (
        <div>
            <LandingPage/>
            <Home/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    )
}
