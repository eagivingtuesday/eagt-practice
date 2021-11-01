import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class LandingForm extends React.Component {

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Group controlId="formConfirmDonations">
          <h6>Practice with a "Confirm Your Donations" pop-up?</h6>
          <Form.Check
            defaultChecked
            name="confirmDonation"
            type="radio"
            label="Yes"
            id="confirmDonationYes"
            onChange={this.props.handleConfirmDonation}
          />

          <Form.Check
            name="confirmDonation"
            type="radio"
            label="No"
            id="confirmDonationNo"
            onChange={this.props.handleConfirmDonation}
          />
          <Form.Text className="text-muted mb-3">
            We are unsure whether Facebook will require donors to click on a
            second "Confirm Your Donations" dialog box this year. We recommend
            donors practice with the dialog box and without, to be prepared for
            either scenario.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formNumPractice">
          <h6>Number of practice donation tabs: <b>{this.props.numPractice}</b></h6>

          <Form.Range
            min={1}
            max={20}
            value={this.props.numPractice}
            onChange={this.props.handleNumPractice}
            />
        </Form.Group>

        <Form.Group>
          <Button variant="primary" type="submit">
            Create Tabs
          </Button>
          <Form.Text className="text-muted"> If you are having trouble creating the right number of
        tabs, you may have to enable popups from this website.</Form.Text>
        </Form.Group>
      </Form>
    );
  }
}

export default LandingForm;
