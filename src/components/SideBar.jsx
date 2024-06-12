import React, { useContext, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import SideProfileComp from './SideBarComponents/SideProfileComp';
import { useStateContext } from '../context/ContextProvider';
import SidebarMenuIcon from './SideBarComponents/SidebarMenuIcon';
import SidebarTab from './SideBarComponents/SidebarTab';
import { RiHome6Line } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { IoPersonCircle } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";

import { MdWork } from "react-icons/md";
import LogoutButton from './LogoutButton';
import ThemeToggle from './ThemeToggle';


const SideBar = () => {
    const {
      openSidebar,
      sidebarPage,
      setsidebarPage,
      activeTab,
      setActiveTab,
    } = useStateContext();
    const handleTabClick = (name) => {
      setActiveTab(name);
      setsidebarPage(name);
    
    };
    // bg-[#030635]
    
  return (
    <div
      className={` rounded-r-3xl h-screen dark:bg-gray-700 ${
        openSidebar ? "w-72 bg-white" : "w-16 bg-white"
      } relative duration-300 shadow-lg`}
    >
      <SidebarMenuIcon />
      <div>
        <SideProfileComp />

        <div className="pt-6">
          <SidebarTab
            name={"Home Page"}
            icon={<GoHomeFill />}
            onClick={() => handleTabClick("Home Page")}
            isActive={activeTab === "Home Page"}
          />
          <SidebarTab
            name={"Personal Details"}
            icon={<IoPersonCircle />}
            onClick={() => handleTabClick("Personal Details")}
            isActive={activeTab === "Personal Details"}
          />
          <SidebarTab
            name={"Skill Section"}
            icon={<FaCode />}
            onClick={() => handleTabClick("Skill Section")}
            isActive={activeTab === "Skill Section"}
          />
          <SidebarTab
            name={"Education Section"}
            icon={<RiGraduationCapFill />}
            onClick={() => handleTabClick("Education Section")}
            isActive={activeTab === "Education Section"}
          />
          <SidebarTab
            name={"Experience Section"}
            icon={<MdWork />}
            onClick={() => handleTabClick("Experience Section")}
            isActive={activeTab === "Experience Section"}
          />
          <SidebarTab
            name={"Project Section"}
            icon={<FaLaptopCode />}
            onClick={() => handleTabClick("Project Section")}
            isActive={activeTab === "Project Section"}
          />
        </div>
        {/* <div>

        <ThemeToggle/>
        </div> */}
        <div className="mx-3 mt-36">{openSidebar && <LogoutButton />}</div>
      </div>
    </div>
  );
}

export default SideBar
