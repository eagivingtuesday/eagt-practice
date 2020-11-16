import React from 'react';
import Page from './Page';

class NotFoundPage extends Page {
  constructor(props) {
    super(props);

    this.state = {
      title: "Page does not exist!",
    };
  }

  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-danger text-light">
          <div className="col-md-8 p-lg-3 mx-auto my-2 text-center">
            <h1 className="display-4">Uh Oh...</h1>
          </div>
        </div>
        <div className="container text-center">
          <p className="lead">
            Sorry, this page does not exist!&nbsp;<a href=".">Click here</a>&nbsp;to return to the home page.
          </p>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;