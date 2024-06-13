import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { setCredentials, setInputs } = useStateContext();
  const logOut = () => {
    navigate("/");
    setCredentials({ email: "", password: "" });
    const updatedData = [
      { institute: "", degree: "", startDate: "", endDate: "", cgpa: "" },
    ];
    localStorage.setItem("educationData", JSON.stringify(updatedData));
 


    const updatedExperience = [
      {
        designation: "",
        companyName: "",
        startDate: "",
        endDate: "",
        point1: "",
        point2: "",
        point3: "",
      },
    ];
    localStorage.setItem("experienceData", JSON.stringify(updatedExperience));

    

    const updatedProject = [
      {
        projectTitle: "",
        techUsed: "",
        point1: "",
      },
    ];
    localStorage.setItem("projectData", JSON.stringify(updatedProject));
  };
  return (
    <div
      className=" font-poppins font-bold  rounded-xl py-2 px-24  flex items-center justify-center bg-red-600 hover:bg-red-700 text-white hover:cursor-pointer select-none "
      onClick={logOut}
    >
      <h1 className="">Log out</h1>
    </div>
  );
};

export default LogoutButton;
