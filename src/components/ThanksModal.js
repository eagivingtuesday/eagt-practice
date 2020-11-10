import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ThanksModal extends React.Component {
  render() {
    return (
      <Modal.Dialog id="thanks-modal" className="shadow-lg" hidden={!this.props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Facebook Pay</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Thank you for your donation</p>
        </Modal.Body>

      </Modal.Dialog>
    );
  }
}

export default ThanksModal;
