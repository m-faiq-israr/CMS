import React, { useState } from "react";
import lay1 from "../../assets/lay1.png";
import lay2 from "../../assets/lay2.png";
import lay3 from "../../assets/lay3.png";
import "./layoutButton.css";
import { RiH1 } from "react-icons/ri";
const LayoutButton = ({ layoutNo }) => {

  const [isClicked, setisClicked] = useState(false);
  const [isHovered, setisHovered] = useState(false);
  const handleClick = () => {
    localStorage.setItem("Layout", layoutNo);
    setisClicked(true)
  };
    const handleBlur = () => {
      setisClicked(false);
    };

    const handleMouseOver = () =>{
    setisHovered(true);      
    }

    const handleMouseOut = () =>{
      setisHovered(false);
    }

  const layout =
    layoutNo === "Layout1"
      ? lay1
      : layoutNo === "Layout2"
      ? lay2
      : layoutNo === "Layout3"
      ? lay3
      : "Nothing to show";
  return (
      <div
        className={` w-60 h-44 rounded-xl bg-cover cursor-pointer ${isClicked ? 'ring-4' : ''}  ring-blue-500 dark:ring-blue-600 ${isHovered ? 'bg-opacity-50' : ''}`}
        style={{ backgroundImage: `url(${layout})`}}
        onClick={handleClick}
        tabIndex='0'
        onBlur={handleBlur}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {/* {isHovered ? <h1 className=" text-lg text-black text-center opacity-  ">Layout</h1> : ''} */}
      </div>
  );
};

export default LayoutButton;
