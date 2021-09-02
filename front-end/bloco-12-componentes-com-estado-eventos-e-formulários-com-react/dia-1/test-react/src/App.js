import React, { Component } from 'react';

function handleClickOne() {
  console.log('REACT É O MELHOR!');
}

function handleClickTwo() {
  console.log('REACT É RUIM!');
}

function handleClickThree() {
  console.log('REACT É O MAAAARAVILHOSO!');
}

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={handleClickOne}>Me click!</button>
        <button onClick={handleClickTwo}>Me click!</button>
        <button onClick={handleClickThree}>Me click!</button>
      </div>
    );
  }
}

export default App;
