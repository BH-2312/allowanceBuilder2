import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Album from "../kidGroup"
import "./style.css";
import { Link } from "react-router-dom";

class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    console.log("user logged out")
  };

  // onBankClick = e => {
  //   e.preventDefault();
  //   this.props.goToBank();
  //   console.log("kid gone to bank")
  // };

  render() {
    const { user } = this.props.auth;
    console.log(this.props)
    console.log(user)
    return (
      <>
        <div style={{ height: "40vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Hey there, {user.name.split(" ")[0]}</b>
                <p className="flow-text grey-text text-darken-1">
                  You are logged into Allowance Builder!
              </p>
                <p className="flow-text grey-text text-darken-1">
                  You are live at {user.address}, {user.suburb}
                </p>
                <p className="flow-text grey-text text-darken-1">
                  Lets make some pocket money!
              </p>
              </h4>
              <Link
                to="/bank"
                style={{
                  width: "250px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              userId = {user.id}
              >
                Go To Bank $$
              </Link>
            </div>
          </div>
        </div>
        <Album userId={user.id} />
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

Dashboard.propTypes = {
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
    (Dashboard);