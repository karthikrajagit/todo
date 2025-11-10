import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <div className="left-section">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
              className={todo.completed ? "completed" : ""}
            >
              {todo.text}
            </span>
          </div>
          <div className="right-section">
            <FaEdit className="icon edit" onClick={() => editTodo(todo.id)} />
            <FaTrash className="icon delete" onClick={() => deleteTodo(todo.id)} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
