import React, { useState } from 'react'
import { useStateContext } from "../../context/ContextProvider";
import InputButton from '../../components/SideBarComponents/InputButton';
import InputField from '../../components/InputField';
import AddFieldButton from '../../components/SideBarComponents/AddFieldButton';
import RemoveFieldButton from '../../components/SideBarComponents/RemoveFieldButton';
import { ImCross } from 'react-icons/im';
import { TiMinus } from 'react-icons/ti';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { useAuth } from "../../Firebase/AuthContext";
import { Toaster, toast } from "react-hot-toast";


const SkillSection = () => {
  const { openSidebar } = useStateContext();
  const [skills, setSkills] = useState(['']);
  const { user } = useAuth();

  //function to handle changes in input fields
  const handleChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const addInputField = () =>{
    // setinputs([...inputs, ''])
    setSkills((prevInputs)=>[...prevInputs, '']);
    
  }

const removeInputField = (index) => {
  if (skills.length > 1) {
    setSkills((prevInputs) => prevInputs.filter((_, i) => i !== index));
  }
};

  const handleSubmit = async (e) =>{
     e.preventDefault();
    if (!user) {
      console.error("User not authenticated");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "Skills"), {
        id:user.uid,
        skills
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success('Skills Added Successfully')
      
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error(e)
    }
    setSkills(['']);
    
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
            <AddFieldButton name={"Add Skills"} onClick={addInputField} />
            {/* <RemoveFieldButton
              name={"Remove Skill"}
              onClick={removeInputField}
            /> */}
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-10 mb-10 ">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-[17rem]">
                  <InputField
                    type={"text"}
                    value={skill}
                    width={"full"}
                    placeholder={`Enter Skill ${index + 1}`}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                </div>
                <div className="bg-red-500 hover:bg-red-600 rounded-full px-1 py-1 flex items-center justify-center ">
                  <button
                    onClick={() => removeInputField(index)}
                    className="text-white"
                  >
                    <TiMinus />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <InputButton type={"submit"} name={"Save"} />
        </form>
        <Toaster/>
      </div>
    </div>
  );
}

export default SkillSection
