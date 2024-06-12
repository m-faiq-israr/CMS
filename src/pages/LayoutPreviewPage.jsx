import React from 'react'
import LayoutButton from '../components/layout/LayoutButton';
import { useNavigate } from "react-router-dom";
import { useStateContext } from '../context/ContextProvider';
import ThemeToggle from '../components/ThemeToggle';
const LayoutPreviewPage = () => {
  const {openSidebar} = useStateContext();
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/profile");
      console.log(localStorage.getItem("Layout"));
    };
  return (
    <div
      className={` bg-indigo-100  h-screen dark:bg-gray-800  w-screen ${
        openSidebar ? "ml-40" : "ml-10 "
      } duration-300`}
    >
      

      <div className="flex flex-col items-center justify-center  pt-40  top-[]">
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
}

export default LayoutPreviewPage
