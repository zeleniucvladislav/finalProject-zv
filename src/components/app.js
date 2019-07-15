import React, { Component } from "react";
import Navbar from "./navbar";
import Content from "./content";
import CategoryNavbar from "./category-navbar";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <CategoryNavbar />
        <Content />
      </div>
    );
  }
}
