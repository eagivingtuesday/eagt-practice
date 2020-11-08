import React from 'react';
import ButtonListener from './ButtonListener'
import LandingForm from './LandingForm'

class Home extends React.Component {
  render() {
    return (
      <div class="container">
        <h1>Home</h1>
        <LandingForm />
        <hr></hr>
        <ButtonListener />
      </div>
    );
  }
}

export default Home;
