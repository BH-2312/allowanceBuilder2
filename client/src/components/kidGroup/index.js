import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import KidCard from '../card';
import jobs from '../../jobs.json'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Album(props) {
  const classes = useStyles();
  // console.log(props)

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="lg" spacing={6} >
          {/* End hero unit */}
          <Grid container spacing={4} item xs={12} >
            {jobs.map(job => (
               <Grid item xs={4} key = {job.id} className = "grid">
               {/* <Paper className={classes.paper}>xs=12</Paper> */}
             
              <KidCard
                className={classes.card}
                id={job.id}
                key={job.id}
                room={job.room}
                image={job.image}
                userId = {props.userId}
              />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Album