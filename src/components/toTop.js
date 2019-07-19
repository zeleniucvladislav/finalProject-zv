import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ToTop extends Component {
  constructor() {
    super();
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div>
        <a className="to-top" onClick={this.scrollToTop}>
          <FontAwesomeIcon
            icon="arrow-alt-circle-up"
            className="to-top__icon"
          />
        </a>
      </div>
    );
  }
}
