import React from 'react';
import $ from 'jquery';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';

import PracticeForm from './PracticeForm';

class ConfirmForm extends PracticeForm {
  constructor(props) {
    super(props);

    this.state = {
      formHidden: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.bc = new BroadcastChannel('button');
  }

  // override
  handleClick() {
    var dateTime = this.getDateTime();
    this.bc.postMessage(dateTime);
  }

  // override
  render() {
    return (
      <Modal.Dialog id="confirm-form" hidden={this.state.formHidden}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Donation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Do you want to donate $100.00 to Test's Practice fundraiser for EA Giving Tuesday?</p>
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
