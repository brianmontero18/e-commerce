import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
}));

// function handleClick(event) {
//   event.preventDefault();
//   alert('You clicked a breadcrumb.');
// }

const SimpleBreadcrumbs = ({ categories }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs aria-label="Breadcrumb">
          { categories && categories.map((item, index) =>
            index === categories.length-1 ?
              <Link key={index} color="inherit">{item}</Link>
            :
              <Typography key={index} color="textPrimary">{item}</Typography>
          )}
        </Breadcrumbs>
      </Paper>
    </div>
  );
}

export default SimpleBreadcrumbs;