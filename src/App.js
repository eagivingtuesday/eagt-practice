import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Practice from './components/Practice';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/practice" component={Practice}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
