import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

class LandingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDonation: false,
      numPractice: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // console.log(event.target);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formConfirmDonations">
          <Form.Label>Practice Handle Donations Dialog?</Form.Label>
          <Form.Check 
            name="confirmDonationYes"
            type="radio"
            id="confirmDonationYes"
            label="Yes"
          />

          <Form.Check
            name="confirmDonationNo"
            type="radio"
            id="confirmDonationNo"
            label="No"
          />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default LandingForm;