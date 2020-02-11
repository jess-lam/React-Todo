import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";


const todos = [
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
  constructor(props) {
    super();
    this.state = {
      todoList: todos
    }
  }

  addNewTodo = newTodoName => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { task: newTodoName, id: Date.now(), completed: false}
      ]
    };
    this.setState(newState);
  };

  toggleCompleted = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(todo => {
        return !todo.completed;
      })
    };
    this.setState(newState);
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTodo={this.addNewTodo}/>
        </div>
        <TodoList
          todos={this.state.todoList}
          toggleCompleted={this.toggleCompleted} 
          clearCompleted={this.clearCompleted} 
          />
      </div>
    );
  }
}

export default App;
