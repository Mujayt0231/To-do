import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

const TaskInput = ({ addTask }) => {

  const [taskLabel, setTaskLable] = useState("");


  const handleAddTask = () => {

    if (!taskLabel.trim()) {
      return;
    }

    const newTask = {
      taskId: `task-${uuidv4()}`,
      label: taskLabel.trim(),
      isCompleted: false,
    }


    addTask(newTask);

    setTaskLable("");
  };


  const handleChange = (e) => {
    setTaskLable(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  }

  return (
    <div className="input-group mb-3">
      <input
        id="newTaskText"
        type="text"
        className="form-control"
        placeholder="What do you need to do today?"
        aria-label="What do you need to do today?"
        aria-describedby="button-addon2"
        value={taskLabel}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <button className="btn btn-dark" type="button" id="button-addon2" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export { TaskInput };
