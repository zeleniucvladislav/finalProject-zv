import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import UserImg from "../../static/assets/username.png";

export default class Sign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <div className="singing-wrapper">
        <div className="box-controller">
          <div
            className={
              "controller " +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLoginBox.bind(this)}
          >
            Login
          </div>
          <div
            className={
              "controller " +
              (this.state.isRegisterOpen ? "selected-controller" : "")
            }
            onClick={this.showRegisterBox.bind(this)}
          >
            Register
          </div>
        </div>

        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox />}
          {this.state.isRegisterOpen && <RegisterBox />}
        </div>
      </div>
    );
  }
}

class LoginBox extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      isVerified: false
    };
  }
  handleLogin() {
    if (this.state.isVerified) {
      alert("You have successfully logged in");
    } else {
      alert("Please verify that you are a human!");
    }
  }

  onChange(value) {
    console.log("Captcha value:", value);
    this.setState({
      isVerified: true
    });
  }
  render() {
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div>
          <div className="user-image">
            <img src={UserImg} alt="User Image" />
          </div>
        </div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this.handleLogin}
          >
            Login
          </button>
          <ReCAPTCHA
            className="sign-captcha"
            sitekey="6LfoFK4UAAAAAP1HMcFJdWyXb9ky1bpaLMxxxGlG"
            onChange={this.onChange}
          />
          <Link to="/" className="sign-home-link">
            Homepage
          </Link>
        </div>
      </div>
    );
  }
}

class RegisterBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="user-image">
          <img src={UserImg} alt="User Image" />
        </div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
            />
          </div>

          <button type="button" className="login-btn">
            Register
          </button>
          <Link to="/" className="sign-home-link">
            Homepage
          </Link>
        </div>
      </div>
    );
  }
}
