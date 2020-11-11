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
            To use this site, you will need to give it permission to use pop-ups!
            You can enable pop-ups in the site settings,
            or enable the right permissions the first time the site attempts to open multiple tabs.
          </p>
          <p>If you are unable to enable pop-ups or open multiple tabs, please refer to&nbsp;
            <a href="https://support.lesley.edu/support/solutions/articles/4000009686-allowing-pop-ups-for-specific-sites"
               target="_blank">
               these instructions
            </a>.
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
