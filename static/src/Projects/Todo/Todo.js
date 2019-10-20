import React, { Component } from 'react';
import { Redirect } from 'react-router';
import TodoList from './TodoList';
import TodoSideNav from './TodoSideNav';
import './TodoStyle.css';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, category: '', text: 'todo item 1', created: 'date here', due: 'date here' },
        { id: 2, category: '', text: 'todo item 2', created: 'date here', due: 'date here' },
        { id: 3, category: '', text: 'todo item 3', created: 'date here', due: 'date here' }
      ],
      categories: [
        { name: 'ToDo', color: 'green' },
        { name: 'School', color: 'green' },
        { name: 'Work', color: 'red' },
        { name: 'Travel', color: 'green' },
        { name: 'Shopping', color: 'blue' }
      ]
    };
  }

  render() {
    return (
      <div>
        <TodoSideNav categories={this.state.categories}></TodoSideNav>
        <div>TODO</div>
        <TodoList todos={this.state.todos} categories={this.state.categories}></TodoList>
      </div>
    );
  }
}

export default Todo;