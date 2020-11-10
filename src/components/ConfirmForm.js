import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';

import PracticeForm from './PracticeForm';

class ConfirmForm extends PracticeForm {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  // override
  render() {
    return (
      <Modal.Dialog id="confirm-form" className="shadow-lg" hidden={!this.props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Donation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Do you want to donate $2499.00 to Practice fundraiser for EA Giving Tuesday?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-primary" disabled>Cancel</Button>
          <Button variant="primary" onClick={this.handleClick}>Donate</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }

}

export default ConfirmForm;
