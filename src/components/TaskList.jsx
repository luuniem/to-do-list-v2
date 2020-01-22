import React from "react";
import "./TaskList.scss";

const TaskList = props => {
  const { tasks, removeTask } = props;
  return (
    <section className="task-list">
      <h4>Added Tasks</h4>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <label htmlFor={task.id}>
              <input
                type="checkbox"
                id={task.id}
                onClick={removeTask.bind(this, task.id)}
              />
              <span>{task.title}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TaskList;
