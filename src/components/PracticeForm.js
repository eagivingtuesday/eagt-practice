import React from 'react';
import $ from 'jquery';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

class PracticeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.bc = new BroadcastChannel('button');
  }

  getDateTime() {
    // TODO: Figure out how to integrate world time API
    // var dtApiUrl = "http://worldtimeapi.org/api/ip";
    // var dateTime;
    // $.ajax({
    //   url: dtApiUrl, 
    //   type: "GET",
    //   dataType : "json",
    //   async : false,
    //   success : function(data) {
    //     dateTime = Date.parse(data.datetime);
    //   }
    // });
    // return dateTime;
    return new Date();
  }

  handleClick() {
    this.setState({
      hasClicked: true
    });
    var dateTime = this.getDateTime();
    this.bc.postMessage(dateTime);
  }

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
      <Card>
        <Card.Header><div className="text-center"><b>Checkout</b></div></Card.Header>
        <Card.Body>

          <h6>Practice fundraiser for EA Giving Tuesday</h6>
          <p className="text-muted">Fundraiser by Test for EA Giving Tuesday (US 501(c)(3) Nonprofit Organization)</p>

          <hr></hr>

          <h6>Donation Amount (US Dollars)</h6>
          <Form>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl type="text" placeholder="100.0" disabled />
            </InputGroup>
          </Form>

          <hr></hr>

          <h6>Donation Frequency</h6>
          <Form>
            <Form.Row className="align-items-center">
              <div className="col">
                <Button variant="primary" block disabled>
                  One-Time Donation
                </Button>
              </div>
              <div className="col">
                <Button variant="secondary" block disabled>
                  Monthly Donation
                </Button>
              </div>
            </Form.Row>
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

          <Form onSubmit={this.handleClick}>
            <Form.Text className="text-muted">
              By tapping Donate, you agree to Facebook's terms and data policies. Currently, all fees are waived.
            </Form.Text>

            <Button variant="primary" type="submit" disabled={this.state.hasClicked} block>
              Donate $100.00
            </Button>
          </Form>
          
        </Card.Body>
      </Card>
    );
  }
}

export default PracticeForm;
