import React from 'react';

const todo = [
  {
    task: 'Water Plants',
    id: 1,
    completed: false
  },
  {
    task: 'Exercise',
    id: 2,
    completed: false
  },
  {
    task: 'Bake Muffins',
    id: 3,
    completed: false
  },
  {
    task: 'Study',
    id: 4,
    completed: false
  },
  {
    task: 'Make Jewelry',
    id: 5,
    completed: false
  }
]
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todo
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
