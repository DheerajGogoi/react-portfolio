import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    myBg: {
      background: '#1b1b1b'
    },
    heading: {
      fontSize: theme.typography.pxToRem(16),
      fontFamily: 'Quicksand',
      fontWeight: 'bolder',
    },
    desc: {
      fontFamily: 'Quicksand',
      fontWeight: 'bolder'
    },
  }),
);

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Product Development</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            I am open for work as a freelancer. If you have an idea and want to make anything, send me a note and I'll be happy to help you. We can also collaborate on a project, where both you and I can work together to build your project. So, how long are you going to wait? Let's get started.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
