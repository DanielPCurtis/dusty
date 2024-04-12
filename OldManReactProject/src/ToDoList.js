const Task = ({ task }) => {
    return <li>{task.text}</li>;
    };
      
const TodoList = ({ tasks }) => {
    return (
      <div>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map(task => (
              <Task key={task.id} task={task} />
              ))}
              </ul>
            ) : (
              <p>No tasks</p>
              )}
          </div>
        );
    };