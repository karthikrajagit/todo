import React from "react";

function TodoInput({ inputValue, setInputValue, addOrEditTodo, editId }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") addOrEditTodo();
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder=""
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={addOrEditTodo}>
        {editId ? "Edit Todo" : "Add Todo"}
      </button>
    </div>
  );
}

export default TodoInput;
