import React from 'react';
import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

const tasks = ['Acordar', 'Trabalhar', 'Estudar', 'Dormir', 'Repeat'];

class App extends React.Component {
  render() {
    return <ul>{ tasks.map((tarefas) => Task(tarefas)) }</ul>;
  }
}

export default App;
