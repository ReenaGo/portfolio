import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Cards from './cardinfo';
import '../Css/Projectcards.css'


const useStyles = makeStyles({
  card: {
    maxWidth: 540,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const projects = Cards.map((project) => {
    return (<Card className={classes.card} style={{ margin: "40px auto" }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={project.image}
          title={project.name}
          style={{backgroundSize: "contain",
                  marginTop: "10px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  marginBottom: "10px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={project.github}>
          <Button
            size="small"
            color="#f5f5f5"
            style={{
              backgroundColor: '#00c9b7',
              boxShadow: "5px 5px 5px gray",
              color: "white"
            }}>
            GitHub
                    </Button></a>
        <br />
        <a href={project.livesite}><Button
          size="small"
          color="#f5f5f5"
          style={{
            backgroundColor: '#00c9b7',
            boxShadow: "5px 5px 5px gray",
            color: "white"
          }}>
          Site
                    </Button></a>
      </CardActions>
    </Card>)
  })



  return (
    <div>{projects}</div>
  );
}