import { useState } from "react";
import { useEffect } from "react";
import { ClearTask } from "./components/ClearTask";
import { Filters } from "./components/Filters";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  //console.log(tasks);


  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(window.localStorage.getItem("react-todo-list-tasks"));

    if (!!tasksFromLocalStorage) {
      setTasks(tasksFromLocalStorage);
    }
  }, []);

  const updateTasks = (tasks) => {
    setTasks(tasks);
    window.localStorage.setItem("react-todo-list-tasks", JSON.stringify(tasks));
  }

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    updateTasks(updatedTasks);
  }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.taskId !== taskId);
    updateTasks(updatedTasks);
  }

  //V1
  // const updateTask = (updatedTask) => {

  //   const updatedTasks = tasks.map((task) => {
  //     if (task.taskId === updatedTask.taskId) {
  //       return updatedTask;
  //     }
  //     return task;
  //   });
  //   updateTasks(updatedTasks);
  // }

  //V2
  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.taskId === taskId) {
        return {
          ...task, isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    updateTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const uncompletedTasks = tasks.filter((task) => !task.isCompleted);
    updateTasks(uncompletedTasks)
  }

  return (
    <div id="main-container">
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} filter={filter} />
      <Filters filter={filter} setFilter={setFilter} />
      <ClearTask clearTasks={clearCompletedTasks} />
    </div>
  );
}

export default App;
