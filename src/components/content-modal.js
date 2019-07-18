import React, { Component } from "react";
import ReactModal from "react-modal";
import ModalMap from "./map";

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
        width: "800px",
        height: "500px"
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
        <h2 className="website-information-title">Information About website</h2>
        <ModalMap />
        <div className="website-information">
          <div className="website-information__phone">
            Phone Number : 555-555-555
          </div>
          <div className="website-information__adress">
            Adress : Chisinau,Alexandru Cel Bun
          </div>
          <div className="website-information__email">
            Email : random@gmail.com
          </div>
        </div>
      </ReactModal>
    );
  }
}
