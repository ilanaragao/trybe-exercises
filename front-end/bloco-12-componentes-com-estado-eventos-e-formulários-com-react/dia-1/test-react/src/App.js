import React, { Component } from 'react';

function handleClick() {
  console.log('REACT É O MELHOR!');
}

class App extends Component {
  render() {
    return (
      <button onClick={handleClick}>Me click!</button>
    );
  }
}

export default App;