import React from "react";
import { useNavigate } from "react-router-dom";
import logBack from "../assets/logBack.jpg";
import LogoutButton from "../components/LogoutButton";
import LayoutButton from "../components/layout/LayoutButton";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
    console.log(localStorage.getItem('Layout'))
  };

  
  return (
    <div className=" bg-indigo-200  h-screen dark:bg-gray-800">
      <LogoutButton />

     

      <div className="flex flex-col items-center justify-center relative top-[30%]">
        <h1 className=" dark:text-white ml-0 text-gray-700 font-poppins font-bold mb-6  text-2xl ">
          Select the Layout to Preview,
        </h1>

        <div className="flex justify-center items-center gap-3">
          <LayoutButton layoutNo={"Layout1"} />
          <LayoutButton layoutNo={"Layout2"} />
          <LayoutButton layoutNo={"Layout3"} />
        </div>
        <div className="mt-4 pr-5">
          <button
            onClick={handleClick}
            className="  bg-blue-600 px-14 py-1 rounded-3xl ml-8 mt-6 text-white text-lg font-semibold hover:bg-blue-700 "
          >
            Preview
          </button>

        </div>
       
      </div>
    </div>
  );
};

export default HomePage;
