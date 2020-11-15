import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Practice from './components/Practice';
import PracticeConfirm from './components/PracticeConfirm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/practice" component={Practice} />
            <Route exact path="/practiceconfirm" component={PracticeConfirm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
