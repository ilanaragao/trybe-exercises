import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);

    this.state = {
      countOne: 0,
      countTwo: 0,
      countThree: 0,
    };
  }

  handleClickOne() {
    this.setState(() => ({
      countOne: 1,
    }));
  }

  handleClickTwo() {
    this.setState(() => ({
      countTwo: 1,
    }));
  }

  handleClickThree() {
    this.setState(() => ({
      countThree: 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickOne}>Me click!</button>
        <button onClick={this.handleClickTwo}>Me click!</button>
        <button onClick={this.handleClickThree}>Me click!</button>
      </div>
    );
  }
}

export default App;
