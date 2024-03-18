import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function Todo({
  todo,
  deleteTodo,
  toggleCompleted,
  toggleIsEditing,
  editTodo,
}) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <MdEdit
          style={{ cursor: "pointer" }}
          onClick={() => {
            toggleIsEditing(todo.id);
          }}
        />
        <MdDelete
          style={{ cursor: "pointer", marginLeft: "5px" }}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
      </div>
    </div>
  );
}
export default Todo;
