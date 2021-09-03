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
    this.setState((prevState) => ({
      countOne: prevState.countOne + 1,
    }), () => {
      console.log(this.buttonColor(this.state.countOne));
    });
  }

  handleClickTwo() {
    this.setState((prevState) => ({
      countTwo: prevState.countTwo + 1,
    }), () => {
      console.log(this.buttonColor(this.state.countTwo));
    });
  }

  handleClickThree() {
    this.setState((prevState) => ({
      countThree: prevState.countThree + 1,
    }), () => {
      console.log(this.buttonColor(this.state.countThree));
    });
  }

  buttonColor(color) {
    return color % 2 === 0 ? 'green' : 'blue';
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClickOne}
          style={{ backgroundColor: this.buttonColor(this.state.countOne) }}
        >
          Me click! / Count = {this.state.countOne}
        </button>
        <button
          onClick={this.handleClickTwo}
          style={{ backgroundColor: this.buttonColor(this.state.countTwo) }}
        >
          Me click! / Count = {this.state.countTwo}
        </button>
        <button
          onClick={this.handleClickThree}
          style={{ backgroundColor: this.buttonColor(this.state.countThree) }}
        >
          Me click! / Count = {this.state.countThree}
        </button>
      </div>
    );
  }
}

export default App;
