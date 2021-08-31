import React, { Component } from 'react'

export default class Greeting extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name} {this.props.lastName}!</h1>
    )
  }
}
