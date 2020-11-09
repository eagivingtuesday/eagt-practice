import React from 'react';
import Results from './Results.js'

class ButtonListener extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'buttonPressTimes': []
    };
  }

  componentDidMount() {
    this.bc = new BroadcastChannel('button');
    this.bc.onmessage = this.buttonPressed.bind(this);
  }

  componentWillUnmount() {
    this.bc.close();
  }

  buttonPressed(ev) {
    this.setState((state, props) => ({
      'buttonPressTimes': [...state.buttonPressTimes, ev.data]
    }));
  };

  render() {
    return (
      <Results times={this.state.buttonPressTimes}/>
    )
  }
}

export default ButtonListener;
