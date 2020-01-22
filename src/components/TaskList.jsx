import React from "react";
import "./TaskList.scss";

const TaskList = props => {
  const { tasks } = props;
  return (
    <section className="task-list">
      <h2>Added Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TaskList;
