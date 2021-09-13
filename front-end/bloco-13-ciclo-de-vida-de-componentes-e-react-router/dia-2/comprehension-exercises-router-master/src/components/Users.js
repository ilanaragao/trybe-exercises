import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingMessage } = this.props;
    return (
      <main>
        <h2>Users</h2>
        <p> { greetingMessage } this is my awesome Users component </p>
      </main>
    );
  }
};

export default Users;
