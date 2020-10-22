import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import toilet from '../../img/toilet.jpg';
import AddJob from '../addJob';
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    objectFit: 'contain'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardContent: {
    flexGrow: 1,
  }
}));

function ParentCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // console.log(props)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} id = "card">
      <CardMedia
        className={classes.media}
        image={props.image}
      />
      <CardContent className={classes.cardContent}>
        <Typography
          variant="h6"
          color="textSecondary"
          component="h5"
        >
          {props.room}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography gutterBottom
          variant="h6"
          color="textSecondary"
          component="h5">
          Add jobs!
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <AddJob room = {props.room} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ParentCard