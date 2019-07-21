import React, { Component } from "react";
import moment from "moment";

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  currentTime() {
    this.setState({
      time: new Date()
    });
  }
  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return (
      <div className="time-wrapper">
        <div className="time-wrapper__date">
          {moment().format("MMMM Do YYYY")}
        </div>
        <div className="time-wrapper__clock">
          {this.state.time.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

export default Clock;
