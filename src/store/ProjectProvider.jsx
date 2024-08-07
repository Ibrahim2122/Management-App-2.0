import React, { useReducer } from "react";

import WorkingProject from "../Components/WorkingProject";
import NoProjcect from "../Components/NoProjcect";
import NewProject from "../Components/NewProject";

import ProjectContext from "./project-context";

const defaultState = {
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
};

const projectReducer = (state, action) => {
  if (action.type === "Add Project") {
    return {
      ...state,
      selectedProjectId: null,
    };
  } else if (action.type === "Remove Project") {
    const updatedProjects = state.projects.filter(
      (project) => project.id !== action.id
    );
    const updatedProjectID = undefined;

    return {
      ...state,
      selectedProjectId: updatedProjectID,
      projects: updatedProjects,
    };
  } else if (action.type === "Save Project") {
    const newProject = {
      ...action.project,
      id: Math.random() * 1000,
    };

    return {
      ...state,
      selectedProjectId: undefined,
      projects: [...state.projects, newProject],
    };
  } else if (action.type === "Cancel Project") {
    return {
      ...state,
      selectedProjectId: undefined,
    };
  } else if (action.type === "Show Project") {
    const updatedID = action.id;
    return {
      ...state,
      selectedProjectId: updatedID,
    };
  } else if (action.type === "Add Task") {
    const newTask = {
      text: action.task,
      projectId: state.selectedProjectId,
      id: Math.random() * 1000,
    };

    return {
      ...state,
      tasks: [newTask, ...state.tasks],
    };
  } else if (action.type === "Clear Task") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.id),
    };
  }
};

const ProjectProvider = ({ children }) => {
  const [projectState, dispatchProjectAction] = useReducer(
    projectReducer,
    defaultState
  );

  const handelAddProject = (project) => {
    dispatchProjectAction({ type: "Add Project", project: project });
  };

  const handelDeleteProject = (id) => {
    dispatchProjectAction({ type: "Remove Project", id: id });
  };

  const handleSaveProject = (project) => {
    dispatchProjectAction({ type: "Save Project", project: project });
  };

  const handelCancelAddProject = () => {
    dispatchProjectAction({ type: "Cancel Project" });
  };

  const handelShowProject = (id) => {
    dispatchProjectAction({ type: "Show Project", id: id });
  };

  const handelAddTask = (task) => {
    dispatchProjectAction({ type: "Add Task", task: task });
  };

  const handleClearTask = (id) => {
    dispatchProjectAction({ type: "Clear Task", id: id });
  };

  const projectContext = {
    selectedProjectId: projectState.selectedProjectId,
    projects: projectState.projects,
    tasks: projectState.tasks,
    addProject: handelAddProject,
    deleteProject: handelDeleteProject,
    saveProject: handleSaveProject,
    cancelProject: handelCancelAddProject,
    showProject: handelShowProject,
    addTask: handelAddTask,
    clearTask: handleClearTask,
  };

  return (
    <ProjectContext.Provider value={projectContext}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
