import React, { useContext } from "react";
import Button from "./Button";
import ProjectContext from "../store/project-context";

const SideBar = ({  }) => {
  const projectCtx = useContext(ProjectContext);

  const handelClick = id => {
    projectCtx.showProject(id)
  }

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h1>
      <Button onClick={projectCtx.addProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projectCtx.projects.map((project) => {
          let cssStyles = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-700"

          if (project.id === projectCtx.selectedProjectId) {
            cssStyles += ' bg-stone-800 text-stone-200';
          } else {
            cssStyles += ' text-stone-400'
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => handelClick(project.id)}
                className={cssStyles}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
