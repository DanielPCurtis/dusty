import logo from './logo.svg';
import './App.css';

// App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <TodoList todos={todos} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
};

export default App;
