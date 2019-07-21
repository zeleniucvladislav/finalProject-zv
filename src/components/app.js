import React, { Component } from "react";
import Navbar from "./navbar/navbar";
import Content from "./content/content";
import Icons from "./helpers/icons";
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
