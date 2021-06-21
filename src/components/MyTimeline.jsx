import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import BookIcon from '@material-ui/icons/Book';
import SchoolIcon from '@material-ui/icons/School';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '4% 4%',
      background: '#1b1b1b',
      color: 'orange'
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    boxTitle: {
      fontFamily: 'Quicksand',
      fontWeight: 'bolder'
    },
    boxText: {
      fontFamily: 'Quicksand'
    }
}));

function MyTimeline() {
  const classes = useStyles();
  return(
    <div className='my-timeline'>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                2018
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineDot>
              <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Paper elevation={5} className={classes.paper} data-aos="fade-left">
            <Typography variant="h6" component="h1" className={classes.boxTitle}>
              Matriculation (10&apos;th)
            </Typography>
            <Typography className={classes.boxText}>Completed my matriculation from Army Public School Jorhat (CBSE board), with an overall of 92.4%.
            <br />
Subjects: Maths, Science, Social Studies, Hindi, English</Typography>
          </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineDot color="primary">
              <BookIcon />
          </TimelineDot>
          <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Paper elevation={5} className={classes.paper} data-aos="fade-right">
              <Typography variant="h6" component="h1" className={classes.boxTitle}>
              High School (10+2)
              </Typography>
              <Typography className={classes.boxText}>Completed my Highs schooling from Army Public School Jorhat (CBSE board), with an overall of 88%.
            <br />
Subjects: Physics, Chemistry, Maths, Informatics practices, Physical Education, English</Typography>
          </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                2020
            </Typography>
          </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
                <AccountBalanceIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={5} className={classes.paper} data-aos="fade-left">
                <Typography variant="h6" component="h1" className={classes.boxTitle}>
                B.Tech in Computer Science (2&apos;nd Semester)
                </Typography>
                <Typography className={classes.boxText}>Currently enrolled in a B.Tech programe in Computer Science and Engineering at Tezpur University.</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                2021
            </Typography>
          </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color="secondary">
                <RepeatIcon />
            </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={5} className={classes.paper} data-aos="fade-right">
                <Typography variant="h6" component="h1" className={classes.boxTitle}>
                Looking for Oppurtunities
                </Typography>
                <Typography className={classes.boxText}>Type text</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default MyTimeline;