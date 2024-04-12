const TodoList = ({ tasks, deleteTodo, toggleComplete }) => {
    const handleToggleComplete = (taskId) => {
      toggleComplete(taskId);
    };
  
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  