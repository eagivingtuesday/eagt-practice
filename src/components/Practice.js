import React from 'react';
import PracticeForm from './PracticeForm';
import ThanksModal from './ThanksModal';
import { sendTime } from '../utils'

class Practice extends React.Component {

  constructor(props) {
    super(props);

    this.donationClick = this.donationClick.bind(this);
    this.bc = new BroadcastChannel('button');

    this.state = {
      showThanks: false
    };
  }

  donationClick() {
    sendTime(this.bc);
    this.setState({
      showThanks: true
    });
  }

  render() {
    return (
      <div className="container" id="practice-container">
        <PracticeForm onClick={this.donationClick} />
        <ThanksModal show={this.state.showThanks} />
      </div>
    );
  }
}

export default Practice;
