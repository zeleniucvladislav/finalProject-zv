import React, { Component } from "react";
import Navbar from "./navbar";
import Content from "./content";

export default class App extends Component {
  constructor() {
    super();
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
