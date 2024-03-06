import { useState } from "react";

function TodoForm({ addTodo }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        placeholder="輸入代辦事項"
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">加入</button>
    </form>
  );
}

export default TodoForm;
