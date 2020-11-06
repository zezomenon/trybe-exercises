import React from 'react';
import './App.css';

const arrTasks = ['React', 'Components', 'Front-end'];
const Task = (value) => {
  return (
    <li>{value}</li>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h3>Lista</h3>
        {arrTasks.map(element => Task(element))}
      </div>
    );
  }
}

export default App;
