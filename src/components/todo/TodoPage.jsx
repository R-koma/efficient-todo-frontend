import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./TodoList";

const TodoPage = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get("/todo");
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/todo", { title });
      setTodos([...todos, response.data]);
      setTitle("");
    } catch (err) {
      console.log(err);
    }
  };

  const completeTodo = async (id) => {
    try {
      await axios.put(`/todo/${id}/complete`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const todoDeleteButton = async (id) => {
    try {
      await axios.delete(`/todo/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="todoPage">
        <div className="inputWrapper">
          <input
            type="text"
            className="taskInput"
            value={title}
            placeholder="Add Task"
            onChange={(e) => setTitle(e.target.value)}
          />
          <form className="taskInputButton" onSubmit={(e) => handleSubmit(e)}>
            <button type="submit" className="addTaskInputButton">
              Add
            </button>
          </form>
        </div>
        <TodoList
          todos={todos}
          onComplete={completeTodo}
          onDelete={todoDeleteButton}
        />
      </div>
    </>
  );
};

export default TodoPage;
