import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page from './components/Page';
import Home from './components/Home';
import Practice from './components/Practice';
import PracticeConfirm from './components/PracticeConfirm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route 
              exact
              path="/" 
              render={props => (
                <Page {...props} component={Home} title="EAGT Practice Simulator" />
              )}
            />
            <Route 
              exact
              path="/practice" 
              render={props => (
                <Page {...props} component={Practice} title="Practice Test" />
              )}
            />
            <Route 
              exact
              path="/practiceconfirm" 
              render={props => (
                <Page {...props} component={PracticeConfirm} title="Confirm Test" />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
