import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { donationAmount } from '../utils';

class ConfirmForm extends React.Component {
  render() {
    return (
      <Modal
        className="shadow-lg"
        show={this.props.show}
        id="confirm-modal"
        onHide={this.props.cancelClick}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Donation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Do you want to donate ${donationAmount} to Practice fundraiser for EA Giving Tuesday?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-primary" onClick={this.props.cancelClick}>Cancel</Button>
          <Button variant="primary" onClick={this.props.onClick}>Donate</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

export default ConfirmForm;
