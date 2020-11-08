import React from 'react';

class ButtonListener extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'isPressed': false,
    };
  }

  componentDidMount() {
    this.bc = new BroadcastChannel('button');
    this.bc.onmessage = this.buttonPressed.bind(this);
  }

  componentWillUnmount() {
    this.bc.close();
  }

  buttonPressed (){
    this.setState({'isPressed': true})
  }

  render() {
    return (
      <p>
        {this.state.isPressed? "Button pressed" : "Button not pressed"}
      </p>
    );
  }

}

export default ButtonListener;
