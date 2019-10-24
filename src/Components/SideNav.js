import React from 'react'
import '../Css/SideNav.css'

export default function SideNav() {
    return (
        <div className = "sideNav">
            <menu>
                <img></img>
                <h3>Reena Gouldbourne</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">My Work</a></li>
                    <li><a href="/">More About Me</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </menu>
        </div>
    )
}
