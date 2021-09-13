import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { About, Home, Users } from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/users" component={ Users } />
      </BrowserRouter>
    );
  }
}

export default App;
