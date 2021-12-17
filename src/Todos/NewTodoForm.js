import React, { useState } from "react";
import "./NewTodoForm.css";
import { connect } from "react-redux";
import { createTodo } from "./actions";

const NewTodoForm = ({ todos, onCretatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your todo item"
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicate = todos.some((todo) => todo.text === inputValue);
          if (!isDuplicate && inputValue.trim() !== "") {
            onCretatePressed(inputValue);
            setInputValue("");
          }
        }}
      >
        {" "}
        Create Todo
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onCretatePressed: (text) => dispatch(createTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
