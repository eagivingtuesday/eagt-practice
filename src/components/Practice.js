import React from 'react';
import PracticeForm from './PracticeForm';
import { sendTime } from '../utils'

class Practice extends React.Component {

  constructor(props) {
    super(props);

    this.donationClick = this.donationClick.bind(this);
    this.bc = new BroadcastChannel('button');
  }

  donationClick() {
    sendTime(this.bc)
  }

  render() {
    return (
      <div className="container" id="practice-container">
        <PracticeForm onClick={this.donationClick} />
      </div>
    );
  }
}

export default Practice;
