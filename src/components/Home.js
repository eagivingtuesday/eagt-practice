import React from 'react';
import LandingForm from './LandingForm'
import Results from './Results'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDonation: true,
      numPractice: 1,
      buttonPressTimes: []
    };

    // handlers for the LandingForm
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmDonation = this.handleConfirmDonation.bind(this);
    this.handleNumPractice = this.handleNumPractice.bind(this);
  }

  componentDidMount() {
    this.buttonChannel = new BroadcastChannel('button');
    this.buttonChannel.onmessage = this.buttonPressed.bind(this);

    this.resetChannel = new BroadcastChannel('reset');
  }

  componentWillUnmount() {
    this.buttonChannel.close();
    this.resetChannel.close();
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
    this.setState({'buttonPressTimes': []});
    event.preventDefault();
  }

  buttonPressed(ev) {
    this.setState((state, props) => ({
      'buttonPressTimes': [...state.buttonPressTimes, ev.data]
    }));
  };

  render() {
    var header = (
      <div className="position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-dark text-light">
        <div className="col-md-8 p-lg-3 mx-auto my-2">
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
              <Results times={this.state.buttonPressTimes}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
