import React from 'react';

class BroadcastingButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.bc = new BroadcastChannel('button');
  }

  handleClick() {
    this.bc.postMessage(new Date())
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Press Button!
      </button>
    );
  }
}

export default BroadcastingButton;
