import React, { Component } from 'react';
import todoService from "../lib/Todo-service";

export default class Todo extends Component {
  
  handleDelete = (id) => {
  todoService
    .deleteTodo(id)
    .then(data => {
      return data;
    })
    .catch(error => console.log(error.response));
  };
  
  render() {
    const { title, body } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{body}</h2>
        <button onClick={() => this.handleDelete(this.props.id)}>Delete</button>
      </div>
    )
  }
}