import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class InstructionsModal extends React.Component {
  render() {
    return (
      <Modal className="shadow-lg fixed-modal" show={this.props.show}>
        <Modal.Header>
          <Modal.Title>Getting Started</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            To use this app, you will need to give it permission to use pop-ups!
            You should be able to allow them in site settings,
            or give it permissions the first time it attempts to open multiple tabs.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onClick} variant="primary">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default InstructionsModal;
