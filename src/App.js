import React, { useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask/TodoTask";

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    setTodoList([...todoList, task]);
    setTask("");
  };

  const handleDelete = () => {

  }
  console.log(todoList);

  return (
    <>
      <div className="header">
        <input
          onChange={handleInput}
          type="text"
          placeholder="Task..."
          name="task"
          value={task}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="todoList">
        <h1>My Task List</h1>
        {todoList.map((task, index, key) => {
          return <TodoTask 
          key={key} 
          index={index} 
          task={task} 
          handleDelete={handleDelete}
          />;
        })}
      </div>
    </>
  );
};

export default App;
