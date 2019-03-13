import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListTodo from './pages/todosList';
import CreateTodo from './pages/createTodo';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ListTodo} />
          <Route exact path='/create' component={CreateTodo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
