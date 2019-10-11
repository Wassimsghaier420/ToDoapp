import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="app-title">Daily Todo Lists</h1>
       
      </div>
      <TodoList/>
      <AddTodo />

    </div>
  );
}

export default  App;

