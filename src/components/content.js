import React, { Component } from "react";

import ContentText from "./content-text";
import PythonImage from "../../static/assets/python.png";
import ReactImage from "../../static/assets/react.png";

export default class Content extends Component {
  constructor() {
    super();

    const python_image = <img src={PythonImage} alt="Python Image" />;
    const react_image = <img src={ReactImage} alt="React Image" />;
    this.initialState = {
      content: [
        {
          _id: 0,
          title: "First Title",
          description: "Description for 0 id",
          image: python_image,
          category: "Python"
        },
        {
          _id: 1,
          title: "Second Title",
          description: "Description for 1 id",
          image: react_image,
          category: "React"
        },
        {
          _id: 2,
          title: "Third Title",
          image: react_image,
          category: "React"
        }
      ]
    };
    this.state = this.initialState;
    this.handleFilter = this.handleFilter.bind(this);
    this.onResetArray = this.onResetArray.bind(this);
  }
  onResetArray = () => {
    this.setState({ ...this.initialState });
    console.log(content);
  };
  handleFilter(filter) {
    this.setState({
      content: this.state.content.filter(content => {
        return content.category === filter;
      })
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onResetArray()}>All</button>
        <button onClick={() => this.handleFilter("Python")}>Python</button>
        <button onClick={() => this.handleFilter("React")}>React</button>
        <ContentText
          className="content-wrapper"
          title="Latest News"
          content={this.state.content}
        />
      </div>
    );
  }
}
