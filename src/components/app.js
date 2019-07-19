import React, { Component } from "react";
import Navbar from "./navbar";
import Content from "./content";
import Icons from "./icons";
export default class App extends Component {
  constructor() {
    super();
    Icons();
  }

  render() {
    return (
      <div className="app-wrapper">
        <Navbar />
        <Content />
      </div>
    );
  }
}
