const ClearTask = ({ ClearTasks }) => {
  return (
    <div className="w-100">
      <button className="btn btn-dark w-100" id="clear-completed-tasks" onClick={ClearTasks}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export { ClearTask };
