import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class ResetButton extends React.Component {

  render() {
    const helpText = this.props.showError ?
      (
        <Form.Text className="text-danger">
        Oh no! At least one other tab was closed!  Reopen new tabs with the form above.
        </Form.Text>
      ) : (
        <Form.Text className="text-muted">
        All the other tabs need to remain open for this button to work!
        </Form.Text>
      )

    if (this.props.show) {
      return (
        <div>
          <Button
            variant="primary"
            type="button"
            onClick={this.props.onClick}
          >
            Reset Tabs
          </Button>
          {helpText}
        </div>
      );
    } else {
      return null;
    }

  }
}

export default ResetButton;
