import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import UserImg from "../../../static/assets/username.png";

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

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

class LoginBox extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      isVerified: false,
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state) && this.state.isVerified) {
      console.log(`
        --LOGGING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `),
        alert(`${this.state.email} ,Welcome to the site!`);
    } else {
      console.error("LOGGING ERROR");
      alert("Incorrect data or captcha submit try again!");
    }
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "password should have atleast 6 characters" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  onChange(value) {
    console.log("Captcha value:", value);
    this.setState({
      isVerified: true
    });
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div>
          <div className="user-image">
            <img src={UserImg} alt="User Image" />
          </div>
        </div>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="box">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                type="email"
                name="email"
                className="login-input"
                placeholder="Email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="error-message">{formErrors.email}</span>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="error-message">{formErrors.password}</span>
              )}
            </div>
            <button
              type="submit"
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
        </form>
      </div>
    );
  }
}

class RegisterBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null,
      email: null,
      password: null,
      formErrors: {
        userName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(`
        --Submitted Form--
        User Name -> ${this.state.userName}
        Email -> ${this.state.email}
        Password -> ${this.state.password}
      `);
      alert(
        `${
          this.state.userName
        } ,you have successfully registered! Welcome to website :)`
      );
    } else {
      console.error("INVALID FORM PASSED");
      alert("Invalid registration data!Please try again.");
    }
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "userName":
        formErrors.userName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="user-image">
          <img src={UserImg} alt="User Image" />
        </div>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="box">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                className={formErrors.userName.length > 0 ? "error" : null}
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"
                name="userName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.userName.length > 0 && (
                <span className="error-message">{formErrors.userName}</span>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                type="text"
                name="email"
                className="login-input"
                placeholder="Email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="error-message">{formErrors.email}</span>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="error-message">{formErrors.password}</span>
              )}
            </div>

            <button type="submit" className="login-btn">
              Register
            </button>
            <Link to="/" className="sign-home-link">
              Homepage
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
