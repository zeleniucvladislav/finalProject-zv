import React, { Component } from "react";

export default class ContentText extends Component {
  render() {
    const { title, content, image, description } = this.props;
    return (
      <div className="content-wrapper">
        <div className="content-wrapper__main-title">{title}</div>
        <div className="content-wrapper__info">
          {content.map(content => {
            return [
              <div key={content._id} className="content-wrapper__content">
                <div className="content-wrapper__title">{content.title}</div>
                <div className="content-wrapper__image">{content.image}</div>
                <div className="content-wrapper__description">
                  {content.description}
                </div>
              </div>
            ];
          })}
        </div>
      </div>
    );
  }
}
