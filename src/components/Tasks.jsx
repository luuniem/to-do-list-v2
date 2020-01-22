import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Tasks = () => {
  const [addedTasks, setAddedTasks] = useState([]);
  const addTaskHandler = task => {
    fetch("https://to-do-list-v2.firebaseio.com/tasks.json", {
      method: "POST",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        setAddedTasks(prevTasks => [
          ...prevTasks,
          { id: responseData.name, ...task }
        ]);
      });
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
