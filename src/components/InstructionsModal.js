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
            Please see the website usage instructions &nbsp;
            <a href="https://eagiv.org/simguide" target="_blank" rel="noreferrer">here</a>.
          </p>
          <p>Of particular importance: you will need to give this site permission
          to use popups, either through the site settings or after the first time the
          site attempts to open multiple tabs.
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
