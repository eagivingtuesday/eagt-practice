import React from 'react';
import PracticeForm from './PracticeForm';
import ThanksModal from './ThanksModal';
import { sendTime } from '../utils';

class Practice extends React.Component {

  constructor(props) {
    super(props);

    this.donationClick = this.donationClick.bind(this);
    this.bc = new BroadcastChannel('button');

    this.state = {
      donationMade: false
    };
  }

  donationClick() {
    if (!this.state.donationMade) {
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
