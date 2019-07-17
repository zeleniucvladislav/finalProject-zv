import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../static/assets/logo.png";
import Clock from "./clock";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-navbar-column">
          <div className="logging-wrapper">
            <Link to="/sign" className="link-to-sign">
              <div className="sign-up">Sign Up</div>
            </Link>
            <Link to="/sign" className="link-to-sign">
              <div className="sign-in">Sign In</div>
            </Link>
          </div>
          <div className="navbar-clock">
            <Clock />
          </div>
        </div>
      </div>
    );
  }
}
