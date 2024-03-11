import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { content: "打掃廁所", id: uuidv4(), isCompleted: false, isEditing: false },
    { content: "寫作業", id: uuidv4(), isCompleted: false, isEditing: false },
  ]);

  const addTodo = (content) => {
    setTodos([...todos, { content, id: uuidv4() }]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      })
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing };
        } else {
          return todo;
        }
      })
    );
  };
  const editTodo = (id, content) => {
    setTodos(
      todos.map((todo) => {
        return todo.id !== id ? todo : { ...todo, content };
      })
    );
  };

  return (
    <div className="Wrapper">
      <h1>待辦事項</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            toggleEdit={toggleEdit}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}

export default App;
