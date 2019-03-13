import React, { Component } from 'react';
import todoService from "../lib/Todo-service";
import Todo from "../components/Todo";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";


export default class ListTodo extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos = () => {
    todoService.getAllTodos()
      .then((data) => {
        console.log(data);
        this.setState( {
          todos: data
        })
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Link to={`/create`}>Create To</Link>
        {todos.map((todo, id) => {
          return (
            <Link to={`/todo/${todo._id}`}>
              <Todo
                key={id}
                title={todo.title}
                body={todo.body}
                id={todo._id}
              />
            </Link>
          );
        })}
      </div>
    )
  }
}