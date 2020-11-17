import React from 'react';
import PracticeForm from './PracticeForm';
import ConfirmForm from './ConfirmForm';
import ThanksModal from './ThanksModal';

import { sendTime } from '../utils';

class Practice extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showConfirm: false,
      donationMade: false,
      allLoaded: false,
    };

    this.donationClick = this.donationClick.bind(this);
    this.submitDonation = this.submitDonation.bind(this);
    this.hideConfirm = this.hideConfirm.bind(this);

    this.loadedChannel = new BroadcastChannel('loaded');
    this.loadedChannel.onmessage = this.loadedMessage.bind(this);

    this.buttonChannel = new BroadcastChannel('button');
  }

  componentDidMount() {

    document.title = this.props.title;
  }

  loadedMessage(msg) {
    if (msg.data === "all loaded") {
      this.setState({
        allLoaded : true
      });
    }
  }

  donationClick(event) {
    // Triggered when user clicks on the button at the bottom of the form
    event.preventDefault();
    if (!this.state.donationMade) {
      if (this.props.useConfirm) {
        this.setState({
          showConfirm: true
        });
      } else {
        this.submitDonation(event);
      }
    }
  }

  submitDonation(event) {
    // Submit the final donation to the home page.  Render this page inactive.
    event.preventDefault();
    if (!this.state.donationMade) {
      this.buttonChannel.postMessage("pressed");
      this.setState({
        showConfirm: false,
        donationMade: true
      });
    }
  }

  hideConfirm(event) {
    // Confirm form canceled
    event.preventDefault();
    if (!this.state.donationMade) {
      this.setState({
        showConfirm: false
      });
    }
  }

  render() {
    const buttonDisabled = this.state.showConfirm || this.state.donationMade

    // Note: this.state.showConfirm is never true if ConfirmForm is not used.
    return (
      <div className="container" id="practice-container">
        <PracticeForm onClick={this.donationClick}
                      disableBtn={buttonDisabled}
                      hide={this.state.donationMade}
                      allLoaded={this.state.allLoaded} />
        <ConfirmForm show={this.state.showConfirm}
                       onClick={this.submitDonation}
                       cancelClick={this.hideConfirm} />
        <ThanksModal show={this.state.donationMade} />
      </div>
    );
  }
}

export default Practice;
