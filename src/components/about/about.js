import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import MediaQuery from "react-responsive";
import Viewer from "react-viewer";
import "react-viewer/dist/index.css";

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
        </div>

        <div className="content-about-wrapper">
          <MediaQuery query="(max-device-width: 768px)">
            <div className="content-about-wrapper__section1" id="section1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eget magna quam. Integer porta lorem cursus malesuada tincidunt.
              Donec ligula eros, tempus sit amet tortor vitae, convallis luctus
              lacus. Nullam a posuere ex, sed elementum mi. Nunc et arcu sed
              neque porta placerat. Nam a imperdiet purus. Aliquam tincidunt
              euismod euismod. Vivamus lacinia odio at sollicitudin vestibulum.
              Aliquam massa felis, commodo ac arcu sit amet, feugiat iaculis
              turpis. Maecenas sed dolor porttitor, pretium arcu vitae, ultrices
              risus. Aliquam placerat lacus felis, a dapibus lacus molestie in.
              Nunc cursus urna vitae mollis tristique. Nulla facilisi. Quisque
              molestie consequat augue. Nullam mauris dolor, efficitur a
              suscipit ultricies, imperdiet a lorem. Donec euismod dictum arcu
              eu vehicula. Donec ac turpis aliquet, interdum eros vitae,
              volutpat leo.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eget magna quam. Integer porta lorem cursus malesuada tincidunt.
              Donec ligula eros, tempus sit amet tortor vitae, convallis luctus
              lacus. Nullam a posuere ex, sed elementum mi. Nunc et arcu sed
              neque porta placerat. Nam a imperdiet purus. Aliquam tincidunt
              euismod euismod. Vivamus lacinia odio at sollicitudin vestibulum.
              Aliquam massa felis, commodo ac arcu sit amet, feugiat iaculis
              turpis. Maecenas sed dolor porttitor, pretium arcu vitae, ultrices
              risus. Aliquam placerat lacus felis, a dapibus lacus molestie in.
              Nunc cursus urna vitae mollis tristique. Nulla facilisi. Quisque
              molestie consequat augue. Nullam mauris dolor, efficitur a
              suscipit ultricies, imperdiet a lorem. Donec euismod dictum arcu
              eu vehicula. Donec ac turpis aliquet, interdum eros vitae,
              volutpat leo. Duis viverra sed risus et faucibus. Mauris sed justo
              vel sapien viverra vulputate ac non dui. Suspendisse et pharetra
              nulla. Quisque consequat vestibulum velit, ut mattis lacus
              vulputate quis. Ut pretium sem et mi fringilla vehicula. Duis
              tempor orci sem, eu luctus enim consequat ut. Cras viverra ligula
              id dui dapibus elementum. Nulla sed efficitur arcu. Aliquam
              fringilla dui dui, a consectetur erat volutpat eu. Vivamus ac
              feugiat felis. Fusce eu quam in sapien faucibus semper. Morbi
              ullamcorper nisi non elit vestibulum, in sodales augue posuere.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vestibulum magna arcu, sagittis
              sit amet nulla vel, molestie consectetur enim. Mauris imperdiet
              porta neque aliquet condimentum. Proin in luctus mi. Etiam et
              ultrices ipsum, lacinia rhoncus nulla. Sed egestas, leo eget
              dapibus aliquet, eros quam porta eros, in scelerisque mi est ut
              justo. Vestibulum tristique mauris ut posuere mattis.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eget magna quam. Integer porta lorem cursus malesuada tincidunt.
              Donec ligula eros, tempus sit amet tortor vitae, convallis luctus
              lacus. Nullam a posuere ex, sed elementum mi. Nunc et arcu sed
              neque porta placerat. Nam a imperdiet purus. Aliquam tincidunt
              euismod euismod. Vivamus lacinia odio at sollicitudin vestibulum.
              Aliquam massa felis, commodo ac arcu sit amet, feugiat iaculis
              turpis. Maecenas sed dolor porttitor, pretium arcu vitae, ultrices
              risus. Aliquam placerat lacus felis, a dapibus lacus molestie in.
              Nunc cursus urna vitae mollis tristique. Nulla facilisi. Quisque
              molestie consequat augue. Nullam mauris dolor, efficitur a
              suscipit ultricies, imperdiet a lorem. Donec euismod dictum arcu
              eu vehicula. Donec ac turpis aliquet, interdum eros vitae,
              volutpat leo.
            </div>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 769px)">
            <div className="content-about-wrapper__section2" id="section2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eget magna quam. Integer porta lorem cursus malesuada tincidunt.
              Donec ligula eros, tempus sit amet tortor vitae, convallis luctus
              lacus. Nullam a posuere ex, sed elementum mi. Nunc et arcu sed
              neque porta placerat. Nam a imperdiet purus. Aliquam tincidunt
              euismod euismod. Vivamus lacinia odio at sollicitudin vestibulum.
              Aliquam massa felis, commodo ac arcu sit amet, feugiat iaculis
              turpis. Maecenas sed dolor porttitor, pretium arcu vitae, ultrices
              risus. Aliquam placerat lacus felis, a dapibus lacus molestie in.
              Nunc cursus urna vitae mollis tristique. Nulla facilisi. Quisque
              molestie consequat augue. Nullam mauris dolor, efficitur a
              suscipit ultricies, imperdiet a lorem. Donec euismod dictum arcu
              eu vehicula. Donec ac turpis aliquet, interdum eros vitae,
              volutpat leo. Duis viverra sed risus et faucibus. Mauris sed justo
              vel sapien viverra vulputate ac non dui. Suspendisse et pharetra
              nulla. Quisque consequat vestibulum velit, ut mattis lacus
              vulputate quis. Ut pretium sem et mi fringilla vehicula. Duis
              tempor orci sem, eu luctus enim consequat ut. Cras viverra ligula
              id dui dapibus elementum. Nulla sed efficitur arcu. Aliquam
              fringilla dui dui, a consectetur erat volutpat eu. Vivamus ac
              feugiat felis. Fusce eu quam in sapien faucibus semper. Morbi
              ullamcorper nisi non elit vestibulum, in sodales augue posuere.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vestibulum magna arcu, sagittis
              sit amet nulla vel, molestie consectetur enim. Mauris imperdiet
              porta neque aliquet condimentum. Proin in luctus mi. Etiam et
              ultrices ipsum, lacinia rhoncus nulla. Sed egestas, leo eget
              dapibus aliquet, eros quam porta eros, in scelerisque mi est ut
              justo. Vestibulum tristique mauris ut posuere mattis.
            </div>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 768px)">
            <div className="content-about-wrapper__section3" id="section3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eget magna quam. Integer porta lorem cursus malesuada tincidunt.
              Donec ligula eros, tempus sit amet tortor vitae, convallis luctus
              lacus. Nullam a posuere ex, sed elementum mi. Nunc et arcu sed
              neque porta placerat. Nam a imperdiet purus. Aliquam tincidunt
              euismod euismod. Vivamus lacinia odio at sollicitudin vestibulum.
              Aliquam massa felis, commodo ac arcu sit amet, feugiat iaculis
              turpis. Maecenas sed dolor porttitor, pretium arcu vitae, ultrices
              risus. Aliquam placerat lacus felis, a dapibus lacus molestie in.
              Nunc cursus urna vitae mollis tristique. Nulla facilisi. Quisque
              molestie consequat augue. Nullam mauris dolor, efficitur a
              suscipit ultricies, imperdiet a lorem. Donec euismod dictum arcu
              eu vehicula. Donec ac turpis aliquet, interdum eros vitae,
              volutpat leo.
            </div>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 769px)">
            <div className="content-about-wrapper__section3" id="section3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eget magna quam. Integer porta lorem cursus malesuada tincidunt.
              Donec ligula eros, tempus sit amet tortor vitae, convallis luctus
              lacus. Nullam a posuere ex, sed elementum mi. Nunc et arcu sed
              neque porta placerat. Nam a imperdiet purus. Aliquam tincidunt
              euismod euismod. Vivamus lacinia odio at sollicitudin vestibulum.
              Aliquam massa felis, commodo ac arcu sit amet, feugiat iaculis
              turpis. Maecenas sed dolor porttitor, pretium arcu vitae, ultrices
              risus. Aliquam placerat lacus felis, a dapibus lacus molestie in.
              Nunc cursus urna vitae mollis tristique. Nulla facilisi. Quisque
              molestie consequat augue. Nullam mauris dolor, efficitur a
              suscipit ultricies, imperdiet a lorem. Donec euismod dictum arcu
              eu vehicula. Donec ac turpis aliquet, interdum eros vitae,
              volutpat leo. Duis viverra sed risus et faucibus. Mauris sed justo
              vel sapien viverra vulputate ac non dui. Suspendisse et pharetra
              nulla. Quisque consequat vestibulum velit, ut mattis lacus
              vulputate quis. Ut pretium sem et mi fringilla vehicula. Duis
              tempor orci sem, eu luctus enim consequat ut. Cras viverra ligula
              id dui dapibus elementum. Nulla sed efficitur arcu. Aliquam
              fringilla dui dui, a consectetur erat volutpat eu. Vivamus ac
              feugiat felis. Fusce eu quam in sapien faucibus semper. Morbi
              ullamcorper nisi non elit vestibulum, in sodales augue posuere.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vestibulum magna arcu, sagittis
              sit amet nulla vel, molestie consectetur enim. Mauris imperdiet
              porta neque aliquet condimentum. Proin in luctus mi. Etiam et
              ultrices ipsum, lacinia rhoncus nulla. Sed egestas, leo eget
              dapibus aliquet, eros quam porta eros, in scelerisque mi est ut
              justo. Vestibulum tristique mauris ut posuere mattis.
            </div>
          </MediaQuery>
        </div>
      </div>
    );
  }
}
