import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { About, Home, Users } from './components';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/strict-access">Strict Access</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/users/:id"
            render={(props) => (
              <Users {...props} greetingMessage="Good Morning" />
            )}
          />
          <Route
            path="/strict-access"
            render={() => (
              <StrictAccess user={{ username: 'joao', password: '1234' }} />
            )}
          />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
