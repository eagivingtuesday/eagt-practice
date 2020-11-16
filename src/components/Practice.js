import React from 'react';
import Page from './Page';
import PracticeForm from './PracticeForm';
import ThanksModal from './ThanksModal';

class Practice extends Page {
  constructor(props) {
    super(props);

    this.donationClick = this.donationClick.bind(this);
    this.buttonChannel = new BroadcastChannel('button');

    this.state = {
      title: "Practice Test",
      donationMade: false,
      allLoaded: false
    };
  }

  donationClick(event) {
    event.preventDefault();
    if(!this.state.donationMade) {
      this.buttonChannel.postMessage("pressed");
      this.setState({
        donationMade: true
      });
    }
  }

  componentDidMount() {
    this.loadedChannel = new BroadcastChannel('loaded');
    this.loadedChannel.onmessage = this.loadedMessage.bind(this);
  }

  loadedMessage(msg) {
    if (msg.data === "all loaded") {
      this.setState({
        allLoaded : true
      });
    }
  }

  render() {
    return (
      <div className="container" id="practice-container">
        <PracticeForm onClick={this.donationClick}
                      disableBtn={this.state.donationMade}
                      hide={this.state.donationMade}
                      allLoaded={this.state.allLoaded} />
        <ThanksModal show={this.state.donationMade} />
      </div>
    );
  }
}

export default Practice;
