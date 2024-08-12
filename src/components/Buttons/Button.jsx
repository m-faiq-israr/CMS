import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { useStateContext } from "../../context/ContextProvider";

const Button = ({bgColor, hoverColor, handleClick}) => {
  const { downloadPDF } = useStateContext();
  return (
    <button
    onClick={handleClick}
      className={ `bg-${bgColor} px-4 py-3 text-sm   flex items-center justify-center text-white rounded-xl hover:bg-${hoverColor} hover:cursor-pointer select-none  font-poppins  `}
      
    >
      <HiOutlineDownload
        className=" mr-1"
        style={{ color: "white", fontSize: "20px" }}
      />
      <div className="">Download CV</div>
    </button>
  );
};

export default Button;
