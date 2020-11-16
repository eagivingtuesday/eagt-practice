import React from 'react';
import LandingForm from './LandingForm';
import Results from './Results';
import InstructionsModal from './InstructionsModal';

import { getApiTime } from '../utils';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDonation: true,
      numPractice: 1,
      buttonPressTimes: [],
      windows: [],
      numWindowsOpened: 0,
      instructionsShow: true
    };

    // handlers for the LandingForm
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmDonation = this.handleConfirmDonation.bind(this);
    this.handleNumPractice = this.handleNumPractice.bind(this);
    this.handleInstructionsClick = this.handleInstructionsClick.bind(this);
  }

  componentDidMount() {
    this.buttonChannel = new BroadcastChannel('button');
    this.buttonChannel.onmessage = this.buttonPressed.bind(this);
  }

  componentWillUnmount() {
    this.buttonChannel.close();
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

  closeWindows() {
    for (const w of this.state.windows) {
      w.close();
    }
    this.setState({windows: []})
  }

  handleSubmit(event) {
    this.closeWindows()

    // Open windows
    var url = this.state.confirmDonation ? "/practiceconfirm" : "/practice";
    var windows = []
    for (var i = 0; i < this.state.numPractice; i++) {
      windows.push(window.open(url, "_blank")) // to open new page
    }

    this.setState({
      buttonPressTimes: [],
      windows: windows,
      numWindowsOpened: this.state.numPractice
    });
    event.preventDefault();
  }

  buttonPressed(ev) {
    const time = getApiTime();
    this.setState((state, props) => ({
      'buttonPressTimes': [...state.buttonPressTimes, time]
    }));
  };

  donationsLeft() {
    return (this.state.numWindowsOpened - this.state.buttonPressTimes.length)
  }

  handleInstructionsClick() {
    this.setState({
      instructionsShow: false
    });
  }

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
          <InstructionsModal
            show={this.state.instructionsShow}
            onClick={this.handleInstructionsClick} />
          <div className="row">
            <div className="col-lg-1 col-md-0"></div>
            <div className="col-lg-10 col-md-12">
              <LandingForm
                numPractice={this.state.numPractice}
                handleConfirmDonation={this.handleConfirmDonation}
                handleNumPractice={this.handleNumPractice}
                handleSubmit={this.handleSubmit} />
              <br></br>
              <Results
                times={this.state.buttonPressTimes}
                donationsLeft={this.donationsLeft()}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
