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
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
        <table width="100%" >
    <tr>
    <td >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="poker"
          height="140"
          image="poker.jpg"
          title="Poker Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Indian Poker strategy testing using simulation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          used ML strategies and compared them to basic algorithmic
            strategies in the game of Indian poker.
            implemented the entire game and simulated more than 1 million
            games.
            generated the first indian poker dataset on kaggle.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://github.com/SuperBaniya/poker_simulation">
          Github
        </Button>
        <Button size="small" color="primary" href="https://www.kaggle.com/namanrgarg/teenpatti">
          Kaggle
        </Button>
      </CardActions>
    </Card>
    </td>
    </tr>
    </table>
    </div>
  );
}
