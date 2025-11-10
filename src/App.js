import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);

  // ✅ Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addOrEditTodo = () => {
    const text = inputValue.trim();
    if (!text) return;

    if (editId) {
      // Editing an existing todo
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, text } : todo
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      // Adding a new todo
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setInputValue(todoToEdit.text);
    setEditId(id);
  };

  return (
    <div className="todo-container p-5">

      <TodoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        addOrEditTodo={addOrEditTodo}
        editId={editId}
      />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
