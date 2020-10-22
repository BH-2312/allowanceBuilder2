import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              {/* <i className="material-icons">attach_money</i>
              Allowance Builder! */}
              <a href="/"><img src="https://images.cooltext.com/5473681.png" width="865" height="107" alt="allowance builder" /></a>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;