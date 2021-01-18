import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
})

export default function ImgMediaCard() {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="poker"
            height="140"
            image="ccc.jpg"
            title="Competitive Coding Club"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Head, Competitive Coding Club
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              built and maintained the{" "}
              <a href="https://competitivecoding.club">CCC website,</a>{" "}
              <a href="https://discord.gg/MCNujFq">discord</a> server and
              competed in several events;
              <br />
              <ul>
                <li>
                  <a href="https://www.codechef.com/users/enji">codechef</a>
                </li>
                <li>
                  <a href="https://www.hackerrank.com/Supera">hackerrank</a>
                </li>
                <li>
                  <a href="https://leetcode.com/enji/">leetcode</a>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://competitivecoding.club"
          >
            Website
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://discord.gg/MCNujFq"
          >
            Discord
          </Button>
        </CardActions>
      </Card>
      <br />
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
              strategies in the game of Indian poker. implemented the entire
              game and simulated more than 1 million games. generated the first
              indian poker dataset on kaggle.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/SuperBaniya/poker_simulation"
          >
            Github
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://www.kaggle.com/namanrgarg/teenpatti"
          >
            Kaggle
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
