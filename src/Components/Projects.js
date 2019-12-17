import React from 'react';

import Button from '@material-ui/core/Button';
import Cards from './cardinfo';
import '../Css/Projectcards.css'
import { ReactComponent as Proj1 } from '../Assets/SVG/project1.svg';
import { ReactComponent as Proj2 } from '../Assets/SVG/project2.svg';
import { ReactComponent as Proj3 } from '../Assets/SVG/project3.svg';







export default function Projects() {

  const style = {
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    backgroundColor: 'black',
    color: "white"
  }
  const projects = Cards.map((project) => {
    return (
      <div className="picCollageButtons">
        <a className="project1Link1" href={project.github}>
          <Button
            size="small"
            style={style}>
            GitHub
          </Button>
        </a>
        <br />
        <a className="project1Link2" href={project.livesite}>
          <Button
            size="small"
            style={style}>
            Site
          </Button>
        </a>
      </div>)
  })



  return (
    <div>
      <div className="projContainers pc1">
        <div className="projTitle">PicCollage</div>
        <div className="projectDescription">PicCollage allows a user to search, upload and edit images, then place onto a downloadable collage. Technology used to build the app includes JavaScript, React/Redux, Google Firebase, HTML, CSS, UploadCare API, HTMLtoCanvas library.</div>
        <Proj3 />
        {projects[0]}
      </div>
      <div className="projContainers pc2">
      <div className="projTitle">Errandly</div>       
        <div className="projectDescription">Errandly allows a user to publish household errands for others to accept and assist with. Technologies used includes JavaScript, HTML, CSS, Adobe XD, Geocode API, Google Maps API.</div>
        <Proj2 />
        {projects[2]}
      </div>
      <div className="projContainers pc3">
        <div className="projTitle">JamSession</div>
        <div className="projectDescription">JamSession has shared interests communities. It features a profile page, community page, real time chat, and live streaming video. Technology used includes JavaScript, Node.Js, Express, Sequelize. Postgres, Twilio Chat, Twilio video, HTML, CSS.</div>
        <Proj1 />
        {projects[1]}
      </div>
    </div>
  );
}