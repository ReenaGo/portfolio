import React from 'react';
import copy from 'clipboard-copy';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));


export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div style={{ height: "70vh", textAlign: "center", backgroundColor: "#eeeeee54;", width: "50vw", margin: "auto", marginTop: "30px" }}>

      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Location: Atlanta, GA
        </Typography>
      <Typography component="p">
        <a href={'https://linkedin.com/in/reena-gouldbourne-205a20a0'} style={{color: "white"}}><LinkedInIcon/></a>
      </Typography>
      <Typography component="p">
        <a href={'https://github.com/ReenaGo'} style={{color: "white"}}><GitHubIcon/></a>
      </Typography>
      <Typography component="p">
      <a  href={"mailto:reenagouldbourne@gmail.com"} style={{color: "white", cursor: "pointer"}}>
        <EmailIcon/>
        </a>
      </Typography>
      <Typography component="h4">
        Thanks for visiting :)
      </Typography>
      </Paper>

    </div>
  );
}


// onClick={() => copy('Reenagouldbourne@gmail.com')}
