import React, { Component } from 'react';
import todoService from "../lib/Todo-service";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    todoService
      .createTodo(this.state)
      .then(data => {
        return data;
      })
      .catch(error => console.log(error.response));
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    const { todos } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label className="label">Title :</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <label className="label">Body:</label>
        <input
          type="text"
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    )
  }
}