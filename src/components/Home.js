import React from 'react';
import Page from './Page';
import LandingForm from './LandingForm';
import Results from './Results';
import InstructionsModal from './InstructionsModal';
import ResetButton from './ResetButton';


import { getApiTime } from '../utils';


class Home extends Page {
  constructor(props) {
    super(props);
    this.state = {
      title: "EAGT Practice Simulator",
      confirmDonation: true,
      numPractice: 1,
      buttonPressTimes: [],
      windows: [],
      numWindowsOpened: 0,
      instructionsShow: true,
      numWindowsLoaded: 0,
      showResetError: false,
    };

    // handlers for the LandingForm
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmDonation = this.handleConfirmDonation.bind(this);
    this.handleNumPractice = this.handleNumPractice.bind(this);
    this.handleInstructionsClick = this.handleInstructionsClick.bind(this);

    this.addPressTime = this.addPressTime.bind(this);
    this.resetButtonOnClick = this.resetButtonOnClick.bind(this);
  }

  componentDidMount() {
    this.bc = new BroadcastChannel("eagt");
    this.bc.onmessage = this.bcMessage.bind(this);
  }

  componentWillUnmount() {
    this.bc.close();
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
    this.setState({
      windows: [],
      numWindowsLoaded: 0,
    })
  }

  handleSubmit(event) {
    this.closeWindows()

    // Open windows
    var url = this.state.confirmDonation ? "/practiceconfirm" : "/practice";
    var windows = []
    for (var i = 0; i < this.state.numPractice; i++) {
      const w = window.open(url, "_blank"); // open new tab
      if (w!== null) {
        windows.push(w)
        w.onload = this.pageLoaded.bind(this);
      }
    }

    this.setState({
      buttonPressTimes: [],
      windows: windows,
      numWindowsOpened: windows.length,
      showResetError: false,
    });
    event.preventDefault();
  }

  resetButtonOnClick() {
    const allOpen = this.state.windows.every(w => !w.closed)
    if (allOpen) {
      this.bc.postMessage("reset");
      this.setState({
        buttonPressTimes: [],
        showResetError: false
      });
    } else {
      console.log("whoops")
      this.setState({
        showResetError: true
      });
    }
  }

  addPressTime(time) {
    this.setState((state, props) => ({
      'buttonPressTimes': [...state.buttonPressTimes, time]
    }));
  }

  bcMessage(msg) {
    if (msg.data === "donation made") {
      this.buttonPressed();
    }
  }

  buttonPressed() {
    const timePromise = new Promise( (sucessFunc, failureFunc) => {
      const time = getApiTime();
      sucessFunc(time);
    });
    timePromise.then(this.addPressTime);
  };

  pageLoaded(ev) {
    this.setState((state, props) => ({
      numWindowsLoaded: state.numWindowsLoaded + 1
    }));
    if (this.state.numWindowsLoaded === this.state.numWindowsOpened) {
      this.bc.postMessage("all loaded");
    }
  }

  donationsLeft() {
    return (this.state.numWindowsOpened - this.state.buttonPressTimes.length)
  }

  handleInstructionsClick() {
    this.setState({
      instructionsShow: false
    });
  }

  render() {
    const header = (
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
              <ResetButton
                onClick={this.resetButtonOnClick}
                show={this.state.numWindowsOpened>0 && this.donationsLeft()===0}
                showError={this.state.showResetError} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
