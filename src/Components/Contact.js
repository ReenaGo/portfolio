import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



export default function PaperSheet() {

  return (
    <div style={{ height: "70vh", textAlign: "center", backgroundColor: "transparent" }}>
      <Typography component="p">
        <a href={'www.linkedin.com/in/reena-gouldbourne-205a20a0'}><Button
          size="large"
          color="white"
          style={{
            backgroundColor: '#005b64',
            boxShadow: "3px 3px 3px black",
            color: "white"

          }}>
          LinkedIn
        </Button></a>
      </Typography>
      <br />
      <Typography component="p">
        <a href={'https://github.com/ReenaGo'}><Button
          size="large"
          color="white"
          style={{
            backgroundColor: '#005b64',
            boxShadow: "3px 3px 3px black",
            color: "white"
          }}>
          GitHub
        </Button></a>
      </Typography>
      <br />
      <Typography component="p">
        <a href={'https://github.com/ReenaGo'}><Button
          size="large"
          color="white"
          style={{
            backgroundColor: '#005b64',
            boxShadow: "3px 3px 3px black",
            color: "white"

          }}>
          email
        </Button></a>        </Typography>

    </div>
  );
}

