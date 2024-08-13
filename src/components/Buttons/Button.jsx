import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";

const Button = ({ bgColor, hoverColor, handleClick, loading }) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-${bgColor} px-4 py-3 text-sm flex items-center disabled:cursor-not-allowed justify-center text-white rounded-xl hover:bg-${hoverColor} cursor-pointer font-poppins`}
      disabled={loading} // Disable the button when loading
    >
      {loading ? (
        <FaSpinner
          className="animate-spin mr-2"
          style={{ color: "white", fontSize: "20px" }}
        />
      ) : (
        <>
          <HiOutlineDownload
            className="mr-1"
            style={{ color: "white", fontSize: "20px" }}
          />
          <div>Download CV</div>
        </>
      )}
    </button>
  );
};

export default Button;
