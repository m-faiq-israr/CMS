import React from "react";
import { useStateContext } from "../../context/ContextProvider";

const SidebarIcons = ({ icon, name}) => {
  const { openSidebar, setopenSidebar, activeTab, setActiveTab, setsidebarPage } =
    useStateContext();
  const handleClick = () => {
    // setopenSidebar(!openSidebar);
    setActiveTab(name);
    setsidebarPage(name);
  };

  return (
    <div className="pt-4 flex justify-center">
      <div
        className={`  text-3xl rounded-xl cursor-pointer   ${
          activeTab === name ? "" : ""
        }`}
        onClick={handleClick}
      >
        <div
          className={` p-1  bg-indigo-500 hover:bg-indigo-700 text-white duration-300 ${
            activeTab === name ? "bg-indigo-700 rounded-3xl" : "rounded-xl"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default SidebarIcons;
