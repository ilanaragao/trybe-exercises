/* Crie uma lista de tarefas simples que:
Utilize a função Task dentro do componente App .
Leia as tarefas de dentro de um Array.
Use a função map para criar cada item da lista no HTML. */

import React from 'react';
import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

const tasks = ['Acordar', 'Trabalhar', 'Estudar', 'Dormir', 'Repeat'];

class App extends React.Component {
  render() {
    return <ul>{ tasks.map(tarefa => Task(tarefa)) }</ul>;
  }
}

export default App;
