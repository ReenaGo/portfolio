import React from 'react';
import Typography from '@material-ui/core/Typography';
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


export default function Contact() {
  const classes = useStyles();

  return (
    <div style={{ height: "83vh", textAlign: "center", backgroundColor: "#eeeeee54;", width: "50vw", margin: "auto", marginTop: "30px" }}>

      <Paper className={classes.root} style={{backgroundColor: "#ffffff"}}>
        <div>
          Location: Atlanta, GA
        </div>
      <Typography component="p">
        <a href={'https://linkedin.com/in/reena-gouldbourne-205a20a0'} style={{color: "black"}}><LinkedInIcon/></a>
      </Typography>
      <Typography component="p">
        <a href={'https://github.com/ReenaGo'} style={{color: "black"}}><GitHubIcon/></a>
      </Typography>
      <Typography component="p">
      <a  href={"mailto:reenagouldbourne@gmail.com"} style={{color: "black", cursor: "pointer"}}>
        <EmailIcon/>
        </a>
      </Typography>
      <div>
        Thanks for visiting!!
      </div>
      </Paper>

    </div>
  );
}


