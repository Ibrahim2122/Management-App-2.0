import { useContext, useState } from "react";
import NewProject from "./Components/NewProject";
import SideBar from "./Components/SideBar";
import NoProjcect from "./Components/NoProjcect";
import WorkingProject from "./Components/WorkingProject";
import ProjectProvider from "./store/ProjectProvider";
import ProjectContext from "./store/project-context";

function App() {
  const projectCtx = useContext(ProjectContext);

  const selectedProject = projectCtx.projects.find(
    (project) => project.id === projectCtx.selectedProjectId
  );

  let content = <WorkingProject project={selectedProject} />;


  if (projectCtx.selectedProjectId === undefined) {
    content = <NoProjcect />;
  } else if (projectCtx.selectedProjectId === null) {
    content = <NewProject />;
  } 
  
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar />
        {content}
      </main>
    </>
  );
}

export default App;
