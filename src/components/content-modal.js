import React, { Component } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement(".app-wrapper");

export default class ContentModal extends Component {
  constructor(props) {
    super(props);

    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%",
        width: "800px"
      },
      overlay: {
        backgroundColor: "rgba(1, 1, 1, 0.85)"
      }
    };
  }

  render() {
    return (
      <ReactModal
        style={this.customStyles}
        onRequestClose={() => {
          this.props.handleModalClose();
        }}
        isOpen={this.props.modalIsOpen}
      >
        <h2>Information About website</h2>
      </ReactModal>
    );
  }
}