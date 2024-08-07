import React, { useState, useContext } from "react";
import NewTask from "./NewTask";

import ProjectContext from "../store/project-context";

function Tasks() {
  const projectCtx = useContext(ProjectContext);
  // const [tasks, setTasks] = useState([]);

  // const handelAddingTask = (newTask) => {
  //   const addTask = {
  //     text: newTask,
  //   };

  //   setTasks((prevState) => {
  //     return [...prevState, addTask];
  //   });
  // };

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      {projectCtx.tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project doesn't have ant tasks yet.
        </p>
      )}
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {projectCtx.tasks.map((task) => {
          return (
            projectCtx.selectedProjectId === task.projectId && (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  onClick={() => projectCtx.clearTask(task.id)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}

export default Tasks;
