import React from "react";
import SideBar from "../components/SideBar";
import HomePage from "./HomePage";
import { useStateContext } from "../context/ContextProvider";
import PersonalDetails from "./SidebarPages/PersonalDetails";
import SkillSection from "./SidebarPages/SkillSection";
import EducationSection from "./SidebarPages/EducationSection";
import ExperienceSection from "./SidebarPages/ExperienceSection";
import ProjectSection from "./SidebarPages/ProjectSection";
import ThemeToggle from "../components/ThemeToggle";
import Navbar from "../components/Navbar/Navbar";

const AdminPage = () => {
  const { sidebarPage, openSidebar } = useStateContext();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="   hidden lg:block">
        <div className="fixed">
          <SideBar />
        </div>
      </div>
      <div className="w-full ">
        <div className="lg:hidden">
          <Navbar />
        </div>
        <div
          className={` hidden lg:block fixed right-2 top-1 ${
            openSidebar ? "" : ""
          }`}
        >
          <ThemeToggle />
        </div>
        <div className={`  ${openSidebar ? "lg:ml-[26%]  lg:w-[70%]" : "lg:ml-[10%] lg:w-[85%]"}`}>
          {sidebarPage === "Home Page" ? (
              <HomePage />
          ) : sidebarPage === "Personal Details" ? (
            <PersonalDetails />
          ) : sidebarPage === "Skill Section" ? (
            <div className="ml-[]">
              <SkillSection />
            </div>
          ) : sidebarPage === "Education Section" ? (
            <EducationSection />
          ) : sidebarPage === "Experience Section" ? (
            <ExperienceSection />
          ) : sidebarPage === "Project Section" ? (
            <ProjectSection />
          ) : (
            <HomePage />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
