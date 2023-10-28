import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, onComplete, onDelete }) => {
  return (
    <div className="todoList">
      <ul className="todoListWrapper">
        {todos.map((todo) => (
          <li className="todoListTitle" key={todo._id}>
            <input
              type="checkbox"
              className="todoCheckBox"
              onClick={() => onComplete(todo._id)}
            />
            <div className="todoTitle">{todo.title}</div>
            <button
              className="todoDeleteButton"
              onClick={() => onDelete(todo._id)}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
