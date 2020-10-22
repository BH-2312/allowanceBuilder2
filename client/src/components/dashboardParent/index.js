import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Album from "../cardGroup"
import { USER_LOADING } from "../../actions/types";
import { Link } from "react-router-dom";

class DashboardParent extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    console.log("user logged out")
  };

  render() {
    const { user } = this.props.auth;
// console.log({user})
    return (
      <>
        <div style={{ height: "25vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into Allowance Builder, you are a parent!
              </p>
              </h4>
              <Link
                  to="/jobHistory"
                  style={{
                    width: "400px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"

                >
                  Check the Job History
              </Link>
            </div>
          </div>
        </div>
        <Album userId = {user.id}/>
        <div className="col s12 center-align">
        <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                  marginBottom: "1rem"
                }}

                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
            </button>
            </div>
      </>
    );
  }
}

DashboardParent.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default
  connect(
    mapStateToProps,
    { logoutUser }
  )
    (DashboardParent);