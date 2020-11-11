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
          <p>To use this site, you will need to enable pop-ups!
            You can enable pop-ups in the site settings,
            or the first time the site attempts to open multiple tabs.
          </p>
          <p>Here are more detailed instructions on enabling pop-ups for&nbsp;
            <a href="https://support.google.com/chrome/answer/95472?co=GENIE.Platform%3DDesktop&hl=en"
               target="_blank">
               Chrome
            </a>&nbsp;and&nbsp;
            <a href="https://support.mozilla.org/en-US/kb/pop-blocker-settings-exceptions-troubleshooting"
               target="_blank">
               Firefox
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
