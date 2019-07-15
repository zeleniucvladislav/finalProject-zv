import React, { Component } from "react";
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
          <div className="sign-up">Sign Up</div>
          <div className="sign-in">Sign In</div>
          <div className="navbar-clock">
            <Clock />
          </div>
        </div>
      </div>
    );
  }
}
