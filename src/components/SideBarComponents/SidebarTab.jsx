import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useStateContext } from '../../context/ContextProvider';
import SidebarIcons from './SidebarIcons';
const SidebarTab = ({ name, icon, onClick, isActive }) => {
  const { openSidebar } = useStateContext();

  

  return (
    <>
      {openSidebar ? (
        <div
          className={`   rounded-xl my-1 mx-3 py-3 px-3 font-poppins cursor-pointer hover:bg-indigo-500 hover:text-white text-gray-700 dark:text-white ${isActive ? 'text-white' : ''} font-bold flex items-center justify-between select-none ${
            isActive ? "bg-indigo-500" : ""
          } `}
          onClick={onClick}
        >
          <div className="flex items-center gap-2 ">
            <div className=" text-2xl">{icon}</div>
            <div>{name}</div>
          </div>
          <div className={`text-gray-800 dark:text-white hover:text-white  ${isActive ? 'text-white' : ''}`}>
            <IoIosArrowForward
              style={{ fontWeight: "bold", fontSize: "16px" }}
            />
          </div>
        </div>
      ) : (
        <div className="">
          <SidebarIcons icon={icon} name={name} />
        </div>
      )}
    </>
  );
};

export default SidebarTab
