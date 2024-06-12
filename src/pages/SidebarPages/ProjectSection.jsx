import React from 'react'
import { useStateContext } from "../../context/ContextProvider";
import AddFieldButton from '../../components/SideBarComponents/AddFieldButton';
import AddProjectBox from '../../components/SideBarComponents/AddProjectBox';
import InputButton from '../../components/SideBarComponents/InputButton';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const ProjectSection = () => {
  const { openSidebar, projectInput, setprojectInput, showToast } =
    useStateContext();

   const addProjectField = () => {
     setprojectInput((prevInputs) => [
       ...prevInputs,
       { projectTitle: "", techUsed: "", point1: "" },
     ]);
   };
   const removeProjectField = (index) => {
     if (projectInput.length > 1) {
       setprojectInput((prevInputs) => {
         const updatedInputs = [...prevInputs];
         updatedInputs.splice(index, 1);
         return updatedInputs;
       });
     }
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     const projectData = projectInput.map((input) => {
       const { projectTitle, techUsed, point1 } = input;
       return {
         projectTitle,
         techUsed,
         point1
       };
     });
     localStorage.setItem("projectData", JSON.stringify(projectData));
     setprojectInput([{ projectTitle: "", techUsed: "", point1: "" }]);
     showToast("Projects Added Succesfully");
   };
  
  return (
    <div
      className={`  pb-10 font-poppins duration-300 w-[60rem] ${
        openSidebar ? "" : "mr-36"
      } `}
    >
      <div className="bg-white dark:bg-gray-700 dark:shadow-none shadow-lg shadow-gray-300 px-10 mt-5 py-10 rounded-3xl">
        <h1 className=" text-4xl font-bold text-gray-700 dark:text-gray-100">
          PROJECT SECTION
        </h1>
        <div className="bg-indigo-700 h-2 w-16 rounded-full mb-8"></div>
        <div className="mb-4 flex justify-end">
          <AddFieldButton name={"Add Project"} onClick={addProjectField} />
        </div>
        <form onSubmit={handleSubmit}>
          {projectInput.map((input, index) => (
            <div key={index} className="mb-4">
              <AddProjectBox
                value={input}
                index={index}
                removeField={() => removeProjectField(index)}
              />
            </div>
          ))}
          <InputButton type={"submit"} name={"Save"} />
        </form>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default ProjectSection
