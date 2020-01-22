import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Tasks = () => {
  const [addedTasks, setAddedTasks] = useState([]);
  const addTaskHandler = task => {
    setAddedTasks(prevTasks => [
      ...prevTasks,
      { id: Math.random().toString(), ...task }
    ]);
  };
  const removeTaskHandler = taskId => {
    setAddedTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <TaskForm onAddTask={addTaskHandler} />
      <section>
        <TaskList tasks={addedTasks} removeTask={removeTaskHandler} />
      </section>
    </div>
  );
};

export default Tasks;
