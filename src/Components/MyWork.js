import React from 'react';
import '../Css/MyWork.css'

export default function MyWork() {
    return (
        <div className="myWorkContainer">
            <div className="errandly">
                <img></img>
                <h1 className="projectName">Errandly</h1>
                <p>Highlights-UI/UX/API Intergration</p>
                <br/>
                <p>
                    This app allows users to publish house hold errands 
                    for other users to assist with. I deep dived into CSS, Adobe XD,
                    Geocode API and Google Maps API to help it come together.
                </p>
                <div>
                    <button>Git</button>
                    <button>Site</button>
                </div>
            </div>
            <div className="jamSession">
                <img></img>
                <h1 className="projectName">Jam Session</h1>
                <p>Highlights-Database/Node.JS/express.JS</p>
                <br/>
                <p>
                    This app builds communities of users with shared interests 
                    and features a profile page, community page, real time chat, 
                    and live streaming video. On this particular project I contributed 
                    to building the database, user authentication, 
                    user-state management and UI/UX design.
                </p>
                <div>
                    <button>Git</button>
                    <button>Site</button>
                </div>
            </div>
            <div className="picCollage">
                <img></img>
                <h1 className="projectName">Pic Collage</h1>
                <p>Highlights-React/Redux/API Integration</p>
                <br/>
                <p>
                    PicCollage allows a user to search for and/or upload images, 
                    edit those images and finally load it onto a collage
                    that is downloadable. I worked on designing the template and 
                    using react/redux to manage the uploading of an image to the template. 
                    In additon I worked on the download feature using the HTMLtoCanvas library.

                </p>
                <div>
                    <button>Git</button>
                    <button>Site</button>
                </div>
            </div>
        </div>
    )
}
