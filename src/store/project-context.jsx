import React from 'react';

const ProjectContext = React.createContext({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
    addProject: () => {},
    deleteProject: id => {},
    saveProject: project => {},
    cancelProject: () => {},
    showProject: id => {},
    addTask: task => {},
    deleteTask: id => {}
  });

export default ProjectContext;