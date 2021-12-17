import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { connect } from "react-redux";
import { confirmTodo, removeTodo } from "./actions";

const TodoList = ({ todos = [], onRemovePressed, onConfirmPressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onConfirmPressed={onConfirmPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onConfirmPressed: (text) => dispatch(confirmTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
