import React from 'react';
import ButtonListener from './ButtonListener'
import LandingForm from './LandingForm'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDonation: true,
      numPractice: 1
    };

    // handlers for the LandingForm
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
    // assumes we get a valid integer (which we do with a range slider)
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
    var header = (
      <div class="position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-dark text-light">
        <div class="col-md-8 p-lg-3 mx-auto my-2">
          <h1 className="display-4 text-center">EAGT Practice Simulator</h1>
        </div>
      </div>
    );
    return (
      <div>
        {header}
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-0"></div>
            <div className="col-lg-10 col-md-12">
              <LandingForm 
                numPractice={this.state.numPractice}
                handleConfirmDonation={this.handleConfirmDonation}
                handleNumPractice={this.handleNumPractice}
                handleSubmit={this.handleSubmit} />
              <br></br>
              <ButtonListener />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
