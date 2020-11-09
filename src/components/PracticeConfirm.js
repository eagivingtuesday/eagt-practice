import React from 'react';
import PracticeForm from './PracticeForm';
import ConfirmForm from './ConfirmForm';

import { sendTime } from '../utils'


class PracticeConfirm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showConfirm: false
    };

    this.donationClick = this.donationClick.bind(this);
    this.confirmationClick = this.confirmationClick.bind(this);

    this.bc = new BroadcastChannel('button');
  }

  donationClick() {
    this.setState({
      showConfirm: true
    });
  }

  confirmationClick() {
    sendTime(this.bc)
    this.setState({
      showConfirm: false
    });
  }

  render() {
    return (
      <div className="container" id="practice-container">
        <PracticeForm onClick={this.donationClick}/>
        <ConfirmForm show={this.state.showConfirm} onClick={this.confirmationClick} />
      </div>
    );
  }
}

export default PracticeConfirm;
