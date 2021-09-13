import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { About, Home, Users } from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
      </nav>
      <switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/users/:id" render={ (props) => <Users { ...props } greetingMessage="Good Morning" /> } />
      </switch>
      </BrowserRouter>
    );
  }
}

export default App;
