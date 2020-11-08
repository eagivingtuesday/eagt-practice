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
    return (
      <div className="container">
        <h1>Home</h1>
        <LandingForm 
          handleConfirmDonation={this.handleConfirmDonation}
          handleNumPractice={this.handleNumPractice}
          handleSubmit={this.handleSubmit} />
        <hr></hr>
        <ButtonListener />
      </div>
    );
  }
}

export default Home;
