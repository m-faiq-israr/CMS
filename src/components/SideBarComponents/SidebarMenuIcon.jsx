import React from 'react'
import { useStateContext } from '../../context/ContextProvider';
import { ImCross } from "react-icons/im";
import { RiMenuFold2Line } from "react-icons/ri";
import { RiMenuFold2Fill } from "react-icons/ri";

import { RiMenuUnfold2Fill } from "react-icons/ri";

const SidebarMenuIcon = () => {
    const {openSidebar, setopenSidebar} = useStateContext();
    const handleClick = () => {
      setopenSidebar(!openSidebar);
    };
  return (
    <div>
      {openSidebar ? (
        <div className=" ">
          <RiMenuUnfold2Fill
            style={{ fontWeight: "bold", fontSize: "40px" }}
            className="bg-indigo-500 rounded-full p-2 hover:bg-indigo-600 text-4xl absolute top-10 -right-5  text-white cursor-pointer"
            onClick={handleClick}
          />
        </div>
      ) : (
        <RiMenuFold2Fill
          style={{ fontWeight: "bold", fontSize: "40px" }}
          className="bg-indigo-500 text-white  font-bold rounded-full p-2 hover:bg-indigo-600 text-4xl absolute top-10 -right-5  cursor-pointer"
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default SidebarMenuIcon
