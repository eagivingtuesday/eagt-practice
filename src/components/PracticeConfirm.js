import React from 'react';
import Page from './Page';
import PracticeForm from './PracticeForm';
import ConfirmForm from './ConfirmForm';
import ThanksModal from './ThanksModal';

import { sendTime } from '../utils';

class PracticeConfirm extends Page {
  constructor(props) {
    super(props);

    this.state = {
      title: "Confirm Test",
      showConfirm: false,
      donationMade: false,
      donationClickMade: false
    };

    this.donationClick = this.donationClick.bind(this);
    this.confirmationClick = this.confirmationClick.bind(this);

    this.bc = new BroadcastChannel('button');
  }

  donationClick() {
    if (!this.state.donationMade) {
      this.setState({
        donationClickMade: true,
        showConfirm: true
      });
    }
  }

  confirmationClick() {
    if (!this.state.donationMade) {
      sendTime(this.bc);
      this.setState({
        showConfirm: false,
        donationMade: true
      });
    }
  }

  render() {
    return (
      <div className="container" id="practice-container">
        <PracticeForm onClick={this.donationClick} 
                      disableBtn={this.state.donationClickMade} 
                      hide={this.state.donationMade} />
        <ConfirmForm show={this.state.showConfirm} 
                     onClick={this.confirmationClick} />
        <ThanksModal show={this.state.donationMade} />
      </div>
    );
  }
}

export default PracticeConfirm;
