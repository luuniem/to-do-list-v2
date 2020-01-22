import React, { useState } from "react";
import "./TaskForm.scss";
import Card from "../UI/Card";

const TaskForm = React.memo(props => {
  const [enteredTask, setEnteredTask] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    const { onAddTask } = props;
    onAddTask({ title: enteredTask });
  };

  return (
    <section className="task-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Enter task below</label>
            <input
              type="text"
              id="title"
              value={enteredTask}
              onChange={event => {
                setEnteredTask(event.target.value);
              }}
            />
          </div>

          <div className="task-form__actions">
            <button type="submit" className="btn waves-effect waves-light">
              Add Task
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
});
export default TaskForm;
