import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import "./style.css";
import Typography from '@material-ui/core/Typography';

class Landing extends Component {
  render() {

    return (
      <React.Fragment>
        <Grid container component="main">
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className="bigPic" />
          <Grid item xs={12} sm={10} md={5} component={Paper} elevation={6} >
            <div className="container valign-wrapper" >
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
          </Grid>
        </Grid>
        <footer className="footer">
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Created by Ben Hilliard
             </Typography>
        </footer>
      </React.Fragment>
    );
  }
}
export default Landing;