import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function Todo() {
  let [count, setCount] = useState(0);
  let data;
  let [todos, setTodos] = useState([]);
  const addTodo = (e) => {
    let copy = [...todos];
    copy = [...copy, { id: count, task: e, completed: false }];
    setCount(count + 1);
    setTodos(copy);
  };

  return (
    <div className="container">
      <div className="row">
        <input
          ref={(node) => {
            data = node;
          }}
        />
        <Button
          variant="primary"
          onClick={() => {
            addTodo(data.value);
            data = "";
          }}
        >
          +
        </Button>
      </div>
      <div className="row">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              ID: {todo.id} TASK:
              {todo.task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Todo;
