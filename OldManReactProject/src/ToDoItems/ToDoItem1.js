// TodoItem1.js
import React from 'react';

const TodoItem1 = ({ todo }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.text}</span>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem1;