import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Practice from './components/Practice';
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/practice">
              <Practice
                title="Practice Page"
                useConfirm={false} />
            </Route>
            <Route exact path="/practiceconfirm">
              <Practice
                title="Practice Page"
                useConfirm={true} />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
