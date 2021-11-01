import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import { donationAmount } from '../utils';


class DonationButton extends React.Component {
  // Returns loading button or regular button.
  render () {
    const innerText = (this.props.allLoaded) ?
      `Donate ${donationAmount}` :
      "Waiting for all tabs to load..."
    return (
      <Button
        variant="primary"
        type="submit"
        className="w-100 mt-2"
        disabled={this.props.disabled || !this.props.allLoaded}
      >
        {innerText}
      </Button>
    )
  }
}

class PracticeForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-1">
          </div>
          <div className="col-lg-6 col-md-10">
            {this.renderCard()}
          </div>
        </div>
      </div>
    );
  }

  renderCard() {
    return(
      <Card hidden={this.props.hide}>
        <Card.Header><div className="text-center"><b>Checkout</b></div></Card.Header>
        <Card.Body>

          <h6>Practice fundraiser for EA Giving Tuesday</h6>
          <p className="text-muted">Fundraiser by Test for EA Giving Tuesday (US 501(c)(3) Nonprofit Organization)</p>

          <hr></hr>

          <h6>Donation Amount (US Dollars)</h6>
          <Form>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl type="text" placeholder={donationAmount} disabled />
            </InputGroup>
          </Form>

          <hr></hr>

          <h6>Donation Frequency</h6>
          <Form>
            <Row className="align-items-center">
              <div className="col pe-1">
                <Button variant="primary" className="w-100" disabled>
                  One-Time Donation
                </Button>
              </div>
              <div className="col ps-1">
                <Button variant="secondary" className="w-100 " disabled>
                  Monthly Donation
                </Button>
              </div>
            </Row>
          </Form>

          <hr></hr>

          <h6>Payment Method</h6>
          <Form>
            <Form.Group controlId="paymentMethod">
              <Form.Check
                defaultChecked
                type="radio"
                label="Visa *1234"
                disabled
              />

              <Form.Check
                type="radio"
                label="Add New Card"
                disabled
              />

              <Form.Check
                type="radio"
                label="Connect to Paypal"
                disabled
              />
            </Form.Group>
          </Form>

          <hr></hr>

          <h6>Who can see that you donated?</h6>
          <Button variant="secondary" size="sm" disabled>Public</Button>
          <p className="text-muted small">Only Test and EA Giving Tuesday can see your amount.</p>

          <hr></hr>

          <Form onSubmit={this.props.onClick}>
            <Form.Text className="text-muted">
              By tapping Donate, you agree to Facebook's terms and data policies. Currently, all fees are waived.
            </Form.Text>
            {/* <div className="d-grid gap-2"> */}
              <DonationButton
                allLoaded={this.props.allLoaded}
                disabled={this.props.disableBtn}
              />
            {/* </div> */}
          </Form>

        </Card.Body>
      </Card>
    );
  }
}

export default PracticeForm;
