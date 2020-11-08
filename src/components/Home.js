import React from 'react';

const home = () =>  {
  return (
    <div>
      <h1>Home</h1>
      <ButtonListener/>
    </div>
  );
}

class ButtonListener extends React.Component {
  constructor(props) {
    super(props);

    this.state = {'isPressed': false};

    this.bc = new BroadcastChannel('button');
    this.bc.onmessage = this.buttonPressed.bind(this);

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

export default home;
