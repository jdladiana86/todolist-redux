import React, { Component } from 'react';
import Header from './components/header';
import AddNewTodo from './containers/addnew';
import './App.css';
import MyTodoList from './containers/mytodolist';
import TodoFilters from './containers/selfilter';
import {connect} from 'react-redux';
import {getTodos} from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getTodos();
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddNewTodo />
          <MyTodoList />
          <TodoFilters />
        </div>
    </div>
    )
  }
}

export default connect(null, {getTodos})(App);
