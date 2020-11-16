import React from 'react';
import Page from './Page';
import PracticeForm from './PracticeForm';
import ThanksModal from './ThanksModal';
import { sendTime } from '../utils';

class Practice extends Page {
  constructor(props) {
    super(props);

    this.donationClick = this.donationClick.bind(this);
    this.bc = new BroadcastChannel('button');

    this.state = {
      title: "Practice Test",
      donationMade: false
    };
  }

  donationClick(event) {
    event.preventDefault();
    if(!this.state.donationMade) {
      this.bc.postMessage("pressed");
      this.setState({
        donationMade: true
      });
    }
  }

  render() {
    return (
      <div className="container" id="practice-container">
        <PracticeForm onClick={this.donationClick}
                      disableBtn={this.state.donationMade}
                      hide={this.state.donationMade} />
        <ThanksModal show={this.state.donationMade} />
      </div>
    );
  }
}

export default Practice;
