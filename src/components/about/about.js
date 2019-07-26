import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import MediaQuery from "react-responsive";
import Viewer from "react-viewer";
import "react-viewer/dist/index.css";

import ShortDummyText from "./shortDummyText";
import DummyText from "./dummyText";

export default class About extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };
  }
  render() {
    return (
      <div className="about-wrapper">
        <div className="about-navbar">
          <Link
            className="about-navbar__1"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Section 1
          </Link>
          <Link
            className="about-navbar__2"
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Section 2
          </Link>
          <Link
            className="about-navbar__3"
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Section 3
          </Link>
          <a href="/" className="about-navbar__4">
            Homepage
          </a>
        </div>

        <div className="content-about-wrapper">
          <MediaQuery query="(max-device-width: 768px)">
            <div className="content-about-wrapper__section1" id="section1">
              {ShortDummyText}
              <button
                className="content-button"
                onClick={() => {
                  this.setState({ visible: !this.state.visible });
                }}
              >
                <Viewer
                  visible={this.state.visible}
                  onClose={() => {
                    this.setState({ visible: false });
                  }}
                  images={[
                    {
                      src: "../../../static/assets/python_1.png",
                      alt: "Image"
                    },
                    {
                      src: "../../../static/assets/python_2.png",
                      alt: "Image"
                    },
                    {
                      src: "../../../static/assets/python_3.png",
                      alt: "Image"
                    }
                  ]}
                />
                Show Image
              </button>
            </div>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 769px)">
            <div className="content-about-wrapper__section1" id="section1">
              {DummyText}
              <button
                className="content-button"
                onClick={() => {
                  this.setState({ visible: !this.state.visible });
                }}
              >
                <Viewer
                  visible={this.state.visible}
                  onClose={() => {
                    this.setState({ visible: false });
                  }}
                  images={[
                    {
                      src: "../../../static/assets/python_1.png",
                      alt: "Image"
                    },
                    {
                      src: "../../../static/assets/python_2.png",
                      alt: "Image"
                    },
                    {
                      src: "../../../static/assets/python_3.png",
                      alt: "Image"
                    }
                  ]}
                />
                Show Image
              </button>
            </div>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 768px)">
            <div className="content-about-wrapper__section2" id="section2">
              {ShortDummyText}
            </div>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 769px)">
            <div className="content-about-wrapper__section2" id="section2">
              {DummyText}
            </div>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 768px)">
            <div className="content-about-wrapper__section3" id="section3">
              {ShortDummyText}
            </div>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 769px)">
            <div className="content-about-wrapper__section3" id="section3">
              {DummyText}
            </div>
          </MediaQuery>
        </div>
      </div>
    );
  }
}
