import React, { Component } from "react";
import { Link } from "react-router-dom";
import kidsChores from "../../img/kidsChores.jpg";
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: 'url(https://source.unsplash.com/random)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

class Landing extends Component {
  render() {
    // const classes = useStyles();
    return (
      // <Grid container component="main" className={classes.root}>
        <div style={{ height: "75vh", backgroundImage: { kidsChores } }} className="container valign-wrapper" >
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                Kids! do you want make some pocket money?
            </h4>
              <h4>
                Parents! do you need to get some jobs done?
            </h4>
              <h4>
                Welcome to allowance builder!
            </h4>
              <br />
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
              </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Log In
              </Link>
              </div>
            </div>
          </div>
        </div>
      // </Grid>
    );
  }
}
export default Landing;