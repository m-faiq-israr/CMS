import React from 'react'
import { useStateContext } from "../../context/ContextProvider";
import AddExperienceBox from '../../components/SideBarComponents/AddExperienceBox';
import AddFieldButton from '../../components/SideBarComponents/AddFieldButton';
import InputButton from '../../components/SideBarComponents/InputButton';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const ExperienceSection = () => {
  const { openSidebar, experienceInput, setexperienceInput, showToast } =
    useStateContext();


    const addExperienceField = () =>{
      setexperienceInput((prevInput) => [
        ...prevInput,
        {
          designation: "",
          companyName: "",
          startDate: "",
          endDate: "",
          point1: "",
          point2: "",
          point3: "",
          location: ""
        },
      ]);
    }


    const removeExperienceField = (index) => {
      if (experienceInput.length > 1) {
        setexperienceInput((prevInputs) => {
          const updatedInputs = [...prevInputs];
          updatedInputs.splice(index, 1);
          return updatedInputs;
        });
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const experienceData = experienceInput.map((input) => {
        const {
          designation,
          companyName,
          startDate,
          endDate,
          point1,
          point2,
          point3,
          location
        } = input;
        return {
          designation,
          companyName,
          startDate,
          endDate,
          point1,
          point2,
          point3,
          location
        };
      });
      localStorage.setItem("experienceData", JSON.stringify(experienceData));
      setexperienceInput([
        {
          designation: "",
          companyName: "",
          startDate: "",
          endDate: "",
          point1: "",
          point2: "",
          point3: "",
          location: ""
        },
      ]);
      showToast("Experience Added Succesfully");
    };

  return (
    <div
      className={`  pb-10 font-poppins duration-300 w-[60rem] ${
        openSidebar ? "" : "mr-36"
      } `}
    >
      <div className="bg-white dark:bg-gray-700 dark:shadow-none shadow-lg shadow-gray-300 px-10 mt-5 py-10 rounded-3xl">
        <h1 className=" text-4xl font-bold text-gray-700 dark:text-gray-100">
          EXPERIENCE SECTION
        </h1>
        <div className="bg-indigo-700 h-2 w-16 rounded-full mb-8"></div>
        <div className="mb-4 flex justify-end">
          <AddFieldButton
            name={"Add Experience"}
            onClick={addExperienceField}
          />
        </div>
        <form onSubmit={handleSubmit}>
          {experienceInput.map((input, index) => (
            <div key={index} className="mb-4">
              <AddExperienceBox
                handleRemove={() => removeExperienceField(index)}
                value={input}
                index={index}
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

export default ExperienceSection
