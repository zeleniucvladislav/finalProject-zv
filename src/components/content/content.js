import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import striptags from "striptags";
import Truncate from "react-truncate";
import { Link } from "react-router-dom";

import ToTop from "../helpers/toTop";
import ContentModal from "./content-modal";

import PythonImage_1 from "../../../static/assets/python_1.png";
import PythonImage_2 from "../../../static/assets/python_2.png";
import PythonImage_3 from "../../../static/assets/python_3.png";
import ReactImage_1 from "../../../static/assets/react_1.png";
import ReactImage_2 from "../../../static/assets/react_2.png";
import ReactImage_3 from "../../../static/assets/react_3.png";
import Cplus_1 from "../../../static/assets/cplus_1.jpg";
import Cplus_2 from "../../../static/assets/cplus_2.png";
import Cplus_3 from "../../../static/assets/cplus_3.png";

const python_image_1 = <img src={PythonImage_1} alt="Python Image" />;
const python_image_2 = <img src={PythonImage_2} alt="Python Image" />;
const python_image_3 = <img src={PythonImage_3} alt="Python Image" />;
const react_image_1 = <img src={ReactImage_1} alt="React Image" />;
const react_image_2 = <img src={ReactImage_2} alt="React Image" />;
const react_image_3 = <img src={ReactImage_3} alt="React Image" />;
const cplus_image_1 = <img src={Cplus_1} alt="C++ Image" />;
const cplus_image_2 = <img src={Cplus_2} alt="C++ Image" />;
const cplus_image_3 = <img src={Cplus_3} alt="C++ Image" />;
const data = [
  {
    _id: 0,
    title: "First Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus sagittis erat, id molestie est tincidunt non. Nam sollicitudin varius malesuada. Ut mattis eros turpis, et vehicula nibh sagittis sed. Mauris urna mi, lacinia sed vehicula in, interdum a urna. Pellentesque facilisis urna et libero convallis, quis mollis ante sollicitudin. Nam blandit gravida posuere. Sed odio est, rutrum nec sapien vitae, sagittis ultricies velit. Phasellus venenatis lacus et pharetra hendrerit Etiam et semper purus. Mauris molestie ut ante condimentum ornare. In hac habitasse platea dictumst. Praesent orci felis, eleifend non tortor id, semper faucibus ex. Mauris imperdiet gravida nunc, et posuere neque rhoncus vitae. Etiam elementum nisi elementum, elementum felis in, tristique elit. Sed vestibulum elit nulla, elementum luctus orci pharetra sed. Sed dapibus tincidunt felis molestie sagittis. Donec massa dui, faucibus in nisl non, cursus accumsan risus. Proin imperdiet nec libero et vestibulum. Aenean porttitor malesuada leo ut rhoncus. Maecenas accumsan posuere porta.Quisque pretium faucibus sem quis commodo. Morbi accumsan nunc mi, a euismod neque gravida nec. Donec tempus, elit ac commodo vestibulum, mauris augue ultricies dolor, eu tincidunt elit purus vitae nibh. Donec condimentum fermentum egestas. Vestibulum tincidunt tortor sed elit pellentesque, ac accumsan ex finibus. Cras pellentesque tortor nulla, at eleifend lorem congue vel. Aenean vitae suscipit orci. Nulla sit amet accumsan tellus. Quisque sem leo, consectetur et tempor eu, convallis quis tortor. Aenean non lectus eu augue suscipit efficitur non non diam. Fusce lorem purus, accumsan ut metus iaculis, viverra bibendum elit. Phasellus feugiat nunc feugiat, ultrices tortor eu, vehicula nisi. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.",
    first_image: python_image_1,
    second_image: python_image_2,
    third_image: python_image_3,
    related_link: "https://www.python.org/",
    author: "Ipsum Lorem",
    category: "Python"
  },
  {
    _id: 1,
    title: "Second Title",
    description:
      "Nam vehicula lacinia fermentum. Morbi eget rutrum metus. In rutrum odio ex, lacinia luctus ipsum egestas elementum. Pellentesque pretium iaculis dignissim. Nam condimentum elit lacus, quis sagittis elit accumsan nec. Aliquam fringilla eget purus sit amet maximus. Sed placerat enim mi, id molestie diam congue eget. Morbi id felis ut enim lobortis suscipit eu at dui. Donec venenatis nibh sapien, ac sollicitudin neque faucibus ut. Curabitur convallis dignissim justo, in ullamcorper purus molestie in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc quis urna viverra, vehicula nibh vitae, finibus nunc. Proin at mi consequat, faucibus purus et, mollis libero.",
    first_image: react_image_1,
    second_image: react_image_2,
    third_image: react_image_3,
    related_link: "https://reactjs.org/",
    author: "Sir Amet",
    category: "React"
  },
  {
    _id: 2,
    title: "Third Title",
    description:
      "Pellentesque vitae lorem mollis, vehicula neque non, tempus neque. In feugiat egestas laoreet. Etiam ac massa risus. Nullam dignissim vitae magna ac posuere. Donec nec magna commodo, scelerisque diam ut, egestas urna. In id facilisis tortor, vitae tristique metus. Curabitur elementum tristique sagittis. Curabitur nisi elit, cursus sed maximus sed, eleifend sed metus. Nulla sit amet nulla in tellus vulputate pellentesque. Vivamus a velit interdum, sagittis risus sit amet, dictum mi.",
    first_image: cplus_image_1,
    second_image: cplus_image_2,
    third_image: cplus_image_3,
    related_link: "https://en.cppreference.com/w/",
    author: "Dolor Ipsum",
    category: "C++"
  },
  {
    _id: 3,
    title: "Fourth Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus sagittis erat, id molestie est tincidunt non. Nam sollicitudin varius malesuada. Ut mattis eros turpis, et vehicula nibh sagittis sed. Mauris urna mi, lacinia sed vehicula in, interdum a urna. Pellentesque facilisis urna et libero convallis, quis mollis ante sollicitudin. Nam blandit gravida posuere. Sed odio est, rutrum nec sapien vitae, sagittis ultricies velit. Phasellus venenatis lacus et pharetra hendrerit Etiam et semper purus. Mauris molestie ut ante condimentum ornare. In hac habitasse platea dictumst. Praesent orci felis, eleifend non tortor id, semper faucibus ex. Mauris imperdiet gravida nunc, et posuere neque rhoncus vitae. Etiam elementum nisi elementum, elementum felis in, tristique elit. Sed vestibulum elit nulla, elementum luctus orci pharetra sed. Sed dapibus tincidunt felis molestie sagittis. Donec massa dui, faucibus in nisl non, cursus accumsan risus. Proin imperdiet nec libero et vestibulum. Aenean porttitor malesuada leo ut rhoncus. Maecenas accumsan posuere porta.Quisque pretium faucibus sem quis commodo. Morbi accumsan nunc mi, a euismod neque gravida nec. Donec tempus, elit ac commodo vestibulum, mauris augue ultricies dolor, eu tincidunt elit purus vitae nibh. Donec condimentum fermentum egestas. Vestibulum tincidunt tortor sed elit pellentesque, ac accumsan ex finibus. Cras pellentesque tortor nulla, at eleifend lorem congue vel. Aenean vitae suscipit orci. Nulla sit amet accumsan tellus. Quisque sem leo, consectetur et tempor eu, convallis quis tortor. Aenean non lectus eu augue suscipit efficitur non non diam. Fusce lorem purus, accumsan ut metus iaculis, viverra bibendum elit. Phasellus feugiat nunc feugiat, ultrices tortor eu, vehicula nisi. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.",
    first_image: react_image_1,
    second_image: react_image_2,
    third_image: react_image_3,
    related_link: "https://reactjs.org/",
    author: "Ipsum Lorem",
    category: "React"
  },
  {
    _id: 4,
    title: "Fifth Title",
    description:
      "Nam vehicula lacinia fermentum. Morbi eget rutrum metus. In rutrum odio ex, lacinia luctus ipsum egestas elementum. Pellentesque pretium iaculis dignissim. Nam condimentum elit lacus, quis sagittis elit accumsan nec. Aliquam fringilla eget purus sit amet maximus. Sed placerat enim mi, id molestie diam congue eget. Morbi id felis ut enim lobortis suscipit eu at dui. Donec venenatis nibh sapien, ac sollicitudin neque faucibus ut. Curabitur convallis dignissim justo, in ullamcorper purus molestie in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc quis urna viverra, vehicula nibh vitae, finibus nunc. Proin at mi consequat, faucibus purus et, mollis libero.",
    first_image: cplus_image_1,
    second_image: cplus_image_2,
    third_image: cplus_image_3,
    related_link: "https://en.cppreference.com/w/",
    author: "Sir Amet",
    category: "C++"
  },
  {
    _id: 5,
    title: "Sixth Title",
    description:
      "Pellentesque vitae lorem mollis, vehicula neque non, tempus neque. In feugiat egestas laoreet. Etiam ac massa risus. Nullam dignissim vitae magna ac posuere. Donec nec magna commodo, scelerisque diam ut, egestas urna. In id facilisis tortor, vitae tristique metus. Curabitur elementum tristique sagittis. Curabitur nisi elit, cursus sed maximus sed, eleifend sed metus. Nulla sit amet nulla in tellus vulputate pellentesque. Vivamus a velit interdum, sagittis risus sit amet, dictum mi.",
    first_image: python_image_1,
    second_image: python_image_2,
    third_image: python_image_3,
    related_link: "https://www.python.org/",
    author: "Dolor Ipsum",
    category: "Python"
  }
];

export default class Content extends Component {
  constructor() {
    super();

    this.initialState = {
      filter: null,
      title: "Latest News",
      contentModalIsOpen: false
    };
    this.state = this.initialState;
    this.filterAll = this.filterAll.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  filterAll = () => {
    this.setState({ ...this.initialState });
  };

  handleModalClose() {
    this.setState({
      contentModalIsOpen: false
    });
  }
  handleContentClick() {
    this.setState({
      contentModalIsOpen: true
    });
  }

  render() {
    const filter = this.state.filter;
    const dataToShow = filter ? data.filter(d => d.category === filter) : data;
    return (
      <div className="main-content-wrapper" id="homepage">
        <div className="category-navbar">
          <div className="category-navbar__links">
            <a onClick={() => this.filterAll()}>All</a>
            <a
              onClick={() =>
                this.setState({
                  filter: "Python"
                })
              }
            >
              Python
            </a>
            <a
              onClick={() =>
                this.setState({
                  filter: "React"
                })
              }
            >
              React
            </a>
            <a
              onClick={() =>
                this.setState({
                  filter: "C++"
                })
              }
            >
              C++
            </a>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content-wrapper__main-title">{this.state.title}</div>
          <div className="content-wrapper__info">
            {dataToShow.map(item => {
              return [
                <div key={item._id} className="content-wrapper__content">
                  <div
                    className="content-wrapper__title"
                    onClick={() => this.filterId(item._id)}
                  >
                    {item.title}
                  </div>

                  <div className="content-wrapper__image">
                    <Carousel>
                      <div>{item.first_image}</div>
                      <div>{item.second_image}</div>
                      <div>{item.third_image}</div>
                    </Carousel>
                    <div className="content-wrapper__category-image">
                      {item.category}
                    </div>
                  </div>

                  <div className="content-wrapper__description">
                    <Truncate lines={3}>{striptags(item.description)}</Truncate>
                  </div>

                  <a
                    href={item.related_link}
                    className="content-wrapper__related-link"
                    target="_blank"
                  >
                    Related Link
                  </a>
                  <div className="content-wrapper__author">{item.author}</div>
                </div>
              ];
            })}
          </div>
        </div>
        <ToTop />
        <ContentModal
          modalIsOpen={this.state.contentModalIsOpen}
          handleModalClose={this.handleModalClose}
        />
        <div className="content-footer">
          <div className="content-footer__modal">
            <a onClick={this.handleContentClick}>Contacts</a>
          </div>
          <div className="content-footer__about">
            <Link to="/about">About</Link>
          </div>
        </div>

        <div />
      </div>
    );
  }
}
