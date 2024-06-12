import React, { useState } from 'react'
import { useStateContext } from "../../context/ContextProvider";
import InputButton from '../../components/SideBarComponents/InputButton';
import InputField from '../../components/InputField';
import AddFieldButton from '../../components/SideBarComponents/AddFieldButton';
import RemoveFieldButton from '../../components/SideBarComponents/RemoveFieldButton';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const SkillSection = () => {
  const { openSidebar, showToast } = useStateContext();
  const [inputs, setinputs] = useState(['']);

  //function to handle changes in input fields
  const handleChange = (index, value) =>{
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setinputs(updatedInputs);
  }

  const addInputField = () =>{
    setinputs([...inputs, ''])
    
  }

  const removeInputField = (index) => {
    if (inputs.length > 1) {
      const updatedInputs = [...inputs];
      updatedInputs.pop();
      setinputs(updatedInputs);
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem('skills', JSON.stringify(inputs))
    setinputs(['']);
    showToast('Skills Added Succesfully');
    
  }
  
  return (
    <div
      className={`  pb-10 font-poppins duration-300 w-[60rem] ${
        openSidebar ? "ml-2" : "mr-36"
      } `}
    >
      <div className="bg-white dark:bg-gray-700 dark:shadow-none shadow-lg shadow-gray-300 px-10 mt-5 py-10 rounded-3xl">
        <form onSubmit={handleSubmit}>
          <h1 className=" text-4xl font-bold text-gray-700 dark:text-gray-100">
            SKILLS SECTION
          </h1>
          <div className="bg-indigo-700 h-2 w-16 rounded-full mb-8"></div>

          <div className="my-4 flex justify-between">
            <AddFieldButton name={"Add Skills Tab"} onClick={addInputField} />
            <RemoveFieldButton
              name={"Remove Skills Tab"}
              onClick={removeInputField}
            />
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-10 ">
            {inputs.map((input, index) => (
              <div key={index} className="w-[17rem]">
                <InputField
                  type={"text"}
                  value={input}
                  width={"full"}
                  placeholder={`Enter Skill ${index + 1}`}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>

          <InputButton type={"submit"} name={"Add Skills"} />
        </form>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default SkillSection
