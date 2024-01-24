import { TaskItem } from "./TaskItem";


// const tasks = [
//   { taskId: "task-1", label: "New Task 1", isCompleted: true },
//   { taskId: "task-2", label: "New Task 2", isCompleted: true },
//   { taskId: "task-3", label: "New Task 3", isCompleted: true },
// ]

const TaskList = ({ tasks, deleteTask }) => {
  const taskItems = tasks.map((task) => {
    return <TaskItem key={task.taskId} label={task.label} taskId={task.taskId} deleteTask={deleteTask} />;
  });

  return (
    <ul className="list-group mb-3" id="taskList" >
      {taskItems}
    </ul>
  );

};

export { TaskList };
