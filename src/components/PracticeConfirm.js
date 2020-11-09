import React from 'react';
import PracticeForm from './PracticeForm';
import ConfirmForm from './ConfirmForm';

class PracticeConfirm extends React.Component {
  constructor(props) {
    super(props);

    // TODO: write handlers to control confirmForm
    this.state = {
      showConfirm: false
    };
  }

  render() {
    return (
      <div className="container" id="practice-container">
        <PracticeForm />
        <ConfirmForm showConfirm={this.state.showConfirm} />
      </div>
    );
  }
}

export default PracticeConfirm;
