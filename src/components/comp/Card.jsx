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
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image="/static/images/cards/1.jpg"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h5" style={{fontFamily:'Quicksand', fontWeight: 'bolder'}}>
            {props.cardTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Quicksand'}}>
            {props.cardContent}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" style={{color: 'orange'}} href={props.siteLink} target='_/blank'>
          {props.btn1}
        </Button>
        <Button size="small" color="primary" href={props.clink} target='_/blank'>
          {props.btn2}
        </Button>
      </CardActions>
    </Card>
  );
}
