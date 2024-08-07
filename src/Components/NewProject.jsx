import Input from "./Input.jsx";
import React, { useContext, useRef } from "react";
import Modal from "./Modal.jsx";
import ProjectContext from "../store/project-context.jsx";

function NewProject({ }) {
  const projectCtx = useContext(ProjectContext);

  const title = useRef();
  const desc = useRef();
  const date = useRef();
  const modalRef = useRef();

  function saveHandler() {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDate = date.current.value;

    //Validation ...
    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modalRef.current.openModal();
      return;
    }

    const newProject = {
      title: enteredTitle,
      description: enteredDesc,
      date: enteredDate,
    };

    // onAddnewProject(newProject);
    projectCtx.saveProject(newProject);
  }

  const handelCancel = () => {
    projectCtx.cancelProject();
  }

  return (
    <>
      <Modal ref={modalRef} buttonLabel="Close">
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-400 mb-4'>Please enter a valid Input</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handelCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={saveHandler}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={desc} label="Description" textarea />
          <Input type="date" ref={date} labal="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
