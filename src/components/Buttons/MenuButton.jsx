import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const MenuButton = () => {
  return (
    <div className=" bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white  hover:bg-blue-700 hover:cursor-pointer  shadow-xl shadow-blue-200/50">
      <GiHamburgerMenu style={{ color: "white", fontSize: "20px" }} />
    </div>
  );
}

export default MenuButton
