import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class LandingForm extends React.Component {
  constructor(props) {
    super(props);

    // duplicate values in LandingForm and in Home, I guess.
    this.state = {
      numPractice: 1
    };

    this.handleNumPractice = this.handleNumPractice.bind(this);
  }

  handleNumPractice(event) {
    // assumes we get a valid integer (which we do with a range slider)
    this.props.handleNumPractice(event);
    this.setState({
      numPractice: parseInt(event.target.value)
    });
  }

  render() {
    return(
      <Card>
        <Card.Header><div className="text-center"><b>Create Practice Tabs</b></div></Card.Header>
        <Card.Body>
        {this.renderForm()}
        </Card.Body>
      </Card>
    );
  }

  renderForm() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Group controlId="formConfirmDonations">
          <h6>Practice 'Confirm Your Donations' Pop Up?</h6>
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
          <Form.Text className="text-muted">
            We are unsure whether Facebook will require donors to click on a 
            second 'Confirm Your Donations' dialog box this year. We recommend
            donors practice with the dialog box and without, to be prepared for
            either scenario.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formNumPractice">
          <h6>Number of practice donation tabs: <b>{this.state.numPractice}</b></h6>

          <Form.Control 
            type="range"
            min={1}
            max={20}
            value={this.state.numPractice}
            onChange={this.handleNumPractice}
            custom />
        </Form.Group>

        <Form.Group>
          <Button variant="primary" type="submit">
            Create Tabs
          </Button>
          <Form.Text className="text-muted">If you are having trouble creating the right number of
        tabs, you may have to enable popups from this website.</Form.Text>
        </Form.Group>
      </Form>
    );
  }
}

export default LandingForm;