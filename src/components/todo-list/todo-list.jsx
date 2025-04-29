import React, { useState, useContext } from 'react';
import { Checkbox } from '../checkbox';
import { TodoForm } from '../todo-form'; // 👈 Import TodoForm
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // ✅ Correct: Add new todo handler
  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    )));
  };

  const completedCount = todos.filter((todo) => todo.checked).length;

  const filteredTodos = todos
    .filter((todo) => todo.label.toLowerCase().includes(searchTerm.toLowerCase(
    )))
    .filter((todo) => {
      if (filter === 'completed') { return todo.checked; }
      if (filter === 'incomplete') { return !todo.checked; }
      return true;
    });

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>

      {/* ✅ Add TodoForm here */}
      <TodoForm onAddTodo={handleAddTodo} />

      <div className="todo-controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="filter-buttons">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'active' : ''}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setFilter('completed')}
            className={filter === 'completed' ? 'active' : ''}
          >
            Completed
          </button>
          <button
            type="button"
            onClick={() => setFilter('incomplete')}
            className={filter === 'incomplete' ? 'active' : ''}
          >
            Incomplete
          </button>
        </div>
      </div>

      <div className="task-count">
        Completed:
        {completedCount}
        /
        {todos.length}
      </div>

      {filteredTodos.length > 0 ? (
        <div className="todo-list-content">
          {filteredTodos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          No matching tasks found!
        </div>
      )}
    </div>
  );
};
