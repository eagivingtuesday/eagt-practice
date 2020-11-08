import React from 'react';

const practice = () =>  {
  return (
    <div>
      <h1>Practice Page</h1>
      <BroadcastingButton />
    </div>
  );
}

class BroadcastingButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.bc = new BroadcastChannel('button');
  }

  handleClick() {
    this.bc.postMessage('Button pressed')
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Press Button!
      </button>
    );
  }
}


export default practice;
