import React from 'react';
import '../Css/Skills.css';
import { ReactComponent as Tools } from '../Assets/SVG/Asset1.svg';
import { ReactComponent as Experience } from '../Assets/SVG/Asset2.svg';








const Skills = () => {
    return (
        <div className="skills">
                <div className="toolcontainer"><Tools /></div>
                <div className="experiencesvgContainer"><Experience/></div>
        </div>
    )
}

export default Skills;