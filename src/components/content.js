import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import striptags from "striptags";
import Truncate from "react-truncate";

import ContentModal from "./content-modal";
import PythonImage from "../../static/assets/python.png";
import ReactImage from "../../static/assets/react.png";

export default class Content extends Component {
  constructor() {
    super();

    const python_image = <img src={PythonImage} alt="Python Image" />;
    const react_image = <img src={ReactImage} alt="React Image" />;
    this.initialState = {
      title: "Latest News",
      content: [
        {
          _id: 0,
          title: "First Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus sagittis erat, id molestie est tincidunt non. Nam sollicitudin varius malesuada. Ut mattis eros turpis, et vehicula nibh sagittis sed. Mauris urna mi, lacinia sed vehicula in, interdum a urna. Pellentesque facilisis urna et libero convallis, quis mollis ante sollicitudin. Nam blandit gravida posuere. Sed odio est, rutrum nec sapien vitae, sagittis ultricies velit. Phasellus venenatis lacus et pharetra hendrerit Etiam et semper purus. Mauris molestie ut ante condimentum ornare. In hac habitasse platea dictumst. Praesent orci felis, eleifend non tortor id, semper faucibus ex. Mauris imperdiet gravida nunc, et posuere neque rhoncus vitae. Etiam elementum nisi elementum, elementum felis in, tristique elit. Sed vestibulum elit nulla, elementum luctus orci pharetra sed. Sed dapibus tincidunt felis molestie sagittis. Donec massa dui, faucibus in nisl non, cursus accumsan risus. Proin imperdiet nec libero et vestibulum. Aenean porttitor malesuada leo ut rhoncus. Maecenas accumsan posuere porta.Quisque pretium faucibus sem quis commodo. Morbi accumsan nunc mi, a euismod neque gravida nec. Donec tempus, elit ac commodo vestibulum, mauris augue ultricies dolor, eu tincidunt elit purus vitae nibh. Donec condimentum fermentum egestas. Vestibulum tincidunt tortor sed elit pellentesque, ac accumsan ex finibus. Cras pellentesque tortor nulla, at eleifend lorem congue vel. Aenean vitae suscipit orci. Nulla sit amet accumsan tellus. Quisque sem leo, consectetur et tempor eu, convallis quis tortor. Aenean non lectus eu augue suscipit efficitur non non diam. Fusce lorem purus, accumsan ut metus iaculis, viverra bibendum elit. Phasellus feugiat nunc feugiat, ultrices tortor eu, vehicula nisi. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.",
          image: python_image,
          second_image: react_image,
          related_link: "https://www.python.org/",
          category: "Python"
        },
        {
          _id: 1,
          title: "Second Title",
          description: "Description for 1 id",
          image: react_image,
          related_link: "https://reactjs.org/",
          category: "React"
        },
        {
          _id: 2,
          title: "Third Title",
          description: "Description for 2 id",
          image: react_image,
          related_link: "https://reactjs.org/",
          category: "React"
        }
      ],
      contentModalIsOpen: false
    };
    this.state = this.initialState;
    this.filterCategory = this.filterCategory.bind(this);
    this.filterAll = this.filterAll.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  filterAll = () => {
    this.setState({ ...this.initialState });
  };

  filterCategory(filter) {
    this.setState({
      content: this.state.content.filter(content => {
        return content.category === filter;
      })
    });
  }
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

  filterId = id => {
    this.setState(state => {
      const content = state.content.filter(item => item._id == id);
      return {
        content
      };
    });
  };

  render() {
    return (
      <div className="main-content-wrapper">
        <div className="category-navbar">
          <div className="category-navbar__links">
            <a onClick={() => this.filterAll()}>All</a>
            <a onClick={() => this.filterCategory("Python")}>Python</a>
            <a onClick={() => this.filterCategory("React")}>React</a>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content-wrapper__main-title">{this.state.title}</div>
          <div className="content-wrapper__info">
            {this.state.content.map(item => {
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
                      <div>{item.image}</div>
                      <div>{item.second_image}</div>
                    </Carousel>
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
                </div>
              ];
            })}
          </div>
        </div>
        <ContentModal
          modalIsOpen={this.state.contentModalIsOpen}
          handleModalClose={this.handleModalClose}
        />
        <div className="new-modal-link">
          <a onClick={this.handleContentClick}>Open Modal!</a>
        </div>

        <div />
      </div>
    );
  }
}
