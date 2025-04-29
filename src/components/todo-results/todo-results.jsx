import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const calculateChecked = () => todos.filter((todo) => todo.checked).length;

  const handleAddTodo = (task) => {
    if (task.trim()) {
      const newTodo = {
        id: Date.now(),
        label: task,
        checked: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  };

  TodoResults.handleAddTodo = handleAddTodo;

  return (
    <div className="todo-results">
      {/* Done: */}
      <span>
        {/* {calculateChecked()} */}
        {/* / */}
        {/* {todos.length} */}
      </span>
    </div>
  );
};
