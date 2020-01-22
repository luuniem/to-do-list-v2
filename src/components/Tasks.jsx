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

  return (
    <div className="App">
      <TaskForm onAddTask={addTaskHandler} />
      <section>
        <TaskList tasks={addedTasks} />
      </section>
    </div>
  );
};

export default Tasks;
