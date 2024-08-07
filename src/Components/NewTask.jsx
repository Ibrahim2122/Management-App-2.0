import React, { useRef, useState, useContext } from "react";
import ProjectContext from "../store/project-context";


function NewTask({  }) {
  const projectCtx = useContext(ProjectContext)
  const [task, setTask] = useState("");

const changeHandler = (event) => {
  setTask(event.target.value);
};

const handleClick = (task) => {
  projectCtx.addTask(task);
  setTask(""); // Make sure this line is executed after onAddTask
};
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={changeHandler}
        type="text"
        value={task}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={() => handleClick(task)}
        className="text-stone-600 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
