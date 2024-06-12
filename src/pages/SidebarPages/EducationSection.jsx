import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import AddEducationBox from "../../components/SideBarComponents/AddEducationBox";
import AddFieldButton from "../../components/SideBarComponents/AddFieldButton";
import InputButton from "../../components/SideBarComponents/InputButton";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const EducationSection = () => {
  const { openSidebar, inputs, setInputs, storedEducationData, showToast } =
    useStateContext();
  console.log(storedEducationData);

  const addEducationField = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      { institute: "", degree: "", startDate: "", endDate: "", cgpa: "" },
    ]);
  };
  const removeEducationField = (index) => {
    if (inputs.length > 1) {
      setInputs((prevInputs) => {
        const updatedInputs = [...prevInputs];
        updatedInputs.splice(index, 1);
        return updatedInputs;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const educationData = inputs.map((input) => {
      const { institute, degree, startDate, endDate, cgpa } = input;
      return {
        institute,
        degree,
        startDate,
        endDate,
        cgpa,
      };
    });
    localStorage.setItem("educationData", JSON.stringify(educationData));
    setInputs([
      { institute: "", degree: "", startDate: "", endDate: "", cgpa: "" },
    ]);
    showToast("Education Added Succesfully");
  };

  return (
    <div
      className={`  pb-10 font-poppins duration-300 w-[60rem] ${
        openSidebar ? "" : "mr-36"
      } `}
    >
      <div className="bg-white dark:bg-gray-700 shadow-lg dark:shadow-none shadow-gray-300 px-10 mt-5 py-10 rounded-3xl">
        <h1 className=" text-4xl font-bold text-gray-700 dark:text-gray-100">
          EDUCATION SECTION
        </h1>
        <div className="bg-indigo-700 h-2 w-16 rounded-full mb-8"></div>
        <div className="mb-4 flex justify-end">
          <AddFieldButton name={"Add Education"} onClick={addEducationField} />
        </div>
        <form onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <div key={index} className="mb-4">
              <AddEducationBox
                value={input}
                onClick={() => removeEducationField(index)}
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
};

export default EducationSection;
