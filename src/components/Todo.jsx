import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditTodoForm from "./EditTodoForm";

function Todo({ todo, deleteTodo, toggleComplete, toggleEdit, editTodo }) {
  return (
    <>
      {todo.isEditing ? (
        <EditTodoForm toggleEdit={toggleEdit} editTodo={editTodo} todo={todo} />
      ) : (
        <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
          <>
            <p onClick={() => toggleComplete(todo.id)}>{todo.content}</p>
            <div>
              <MdEdit onClick={() => toggleEdit(todo.id)} className="icon" />
              <MdDelete onClick={() => deleteTodo(todo.id)} className="icon" />
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default Todo;
