import * as React from 'react';
import './todo-form.scss';

export const TodoForm = ({ onAddTodo }) => {
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now(), // Unique ID
        label: task,
        checked: false,
      };
      onAddTodo(newTask); // 👈 call parent function
      setTask(''); // Clear input
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
