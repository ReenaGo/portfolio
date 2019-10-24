import React from 'react'
import '../Css/Home.css'
import {ReactComponent as Animation} from '../Assets/Animation.svg'

export default function Home() {
    return (
        <div className="homeContainer">
            <div>
                <h1>Reena Gouldbourne</h1>
                <h4>Creative and problem-solving <stong>SOFTWARE ENGINEER</stong></h4>
            </div>
            <div>
                <Animation/>
            </div>

        </div>
    )
}
