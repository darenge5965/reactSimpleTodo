function EditTodoForm({ editTodo, toggleEdit, todo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleEdit(todo.id);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-todo-form">
      <input
        value={todo.content}
        onChange={(e) => editTodo(todo.id, e.target.value)}
      />
      <button type="submit">完成</button>
    </form>
  );
}
export default EditTodoForm;
