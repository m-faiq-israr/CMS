import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { useStateContext } from "../context/ContextProvider";

const Button = ({bgColor, hoverColor}) => {
  const { downloadPDF } = useStateContext();
  return (
    <button
      className={ `bg-${bgColor}  w-44 h-12 flex items-center justify-center text-white rounded-2xl hover:bg-${hoverColor} hover:cursor-pointer select-none  font-poppins  `}
      onClick={downloadPDF}
    >
      <HiOutlineDownload
        className=" mr-1"
        style={{ color: "white", fontSize: "20px" }}
      />
      <div className="text-[14px]">Download CV</div>
    </button>
  );
};

export default Button;
