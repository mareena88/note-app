import React from "react";
import "./TodoTask.css";

const TodoTask = ({ index, task, handleDelete, key }) => {
  return (
    <div className="todotask_container">
        <div>{index+1}</div>
      <div>{task}</div>
      <div>
        <button onClick={(e) => handleDelete(e, index)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoTask;
