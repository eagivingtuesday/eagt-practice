import React from 'react';
import PracticeForm from './PracticeForm';
import ConfirmForm from './ConfirmForm';

class PracticeConfirm extends React.Component {
  render() {
    return (
      <div className="container" id="practice-container">
        <PracticeForm />
        <ConfirmForm />
      </div>
    );
  }
}

export default PracticeConfirm;
