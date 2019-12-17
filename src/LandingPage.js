import React from 'react'
import {ReactComponent as LandingPagesvg} from '../src/Assets/SVG/LandingPage.svg';
// import {ReactComponent as Ladybug} from '../src/Assets/SVG/ladybug.svg';
import './Css/LandingPage.css';

export default function LandingPage() {
    return (
        <div className="landingPageContainer">
            <LandingPagesvg/>
            {/* <div className="ladyBugContainer"><Ladybug/></div>                   */}
        </div>
    )
}
