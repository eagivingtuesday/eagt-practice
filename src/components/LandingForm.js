import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';

class LandingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDonation: true,
      numPractice: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmDonation = this.handleConfirmDonation.bind(this);
    this.handleNumPractice = this.handleNumPractice.bind(this);
  }

  handleConfirmDonation(event) {
    this.setState({
      confirmDonation: event.target.id === "confirmDonationYes"
    });
  }

  handleNumPractice(event) {
    this.setState({
      numPractice: parseInt(event.target.value)
    });
  }

  handleSubmit(event) {
    var url = this.state.confirmDonation ? "/practiceconfirm" : "/practice";
    for (var i = 0; i < this.state.numPractice; i++) {
      window.open(url, "_blank") //to open new page
    }    
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <p>If you are having trouble creating the right number of
        tabs, you may have to enable popups from this website.</p>

        <Form.Group controlId="formConfirmDonations">
          <Form.Label>Practice 'Confirm Your Donations' Pop Up?</Form.Label>
          <Form.Check 
            defaultChecked
            name="confirmDonation"
            type="radio"
            label="Yes"
            id="confirmDonationYes"
            onChange={this.handleConfirmDonation}
          />

          <Form.Check
            name="confirmDonation"
            type="radio"
            label="No"
            id="confirmDonationNo"
            onChange={this.handleConfirmDonation}
          />
          <Form.Text className="text-muted">
            We are unsure whether Facebook will require donors to click on a 
            second 'Confirm Your Donations' dialog box this year. We recommend
            donors practice with the dialog box and without, to be prepared for
            either scenario.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formNumPractice">
          <Form.Label>Number of practice donation tabs: {this.state.numPractice}</Form.Label>

          <Form.Control 
            type="range"
            min={1}
            max={20}
            value={this.state.numPractice}
            onChange={this.handleNumPractice}
            custom />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Tabs
        </Button>
      </Form>
    );
  }
}

export default LandingForm;