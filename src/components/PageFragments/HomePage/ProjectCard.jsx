import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 1345,
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard() {
  const classes = useStyles();

  return (
<div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="poker.jpg"
          title="project Poker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project Poker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Made A simulation of indian Poker Games used it to make the largest dataset of indian poker games on Kaggle
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://github.com/SuperBaniya/poker_simulation" target ="_blank">
          GitHub
        </Button>
        <Button size="small" color="primary" href="https://www.kaggle.com/namanrgarg/teenpatti" target ="_blank">
          Kaggle
        </Button>
      </CardActions>
    </Card>
    
</div>
  );
}
