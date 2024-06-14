import React from 'react'
import SideBar from '../components/SideBar'
import HomePage from './HomePage'
import { useStateContext } from '../context/ContextProvider'
import PersonalDetails from './SidebarPages/PersonalDetails'
import SkillSection from './SidebarPages/SkillSection'
import EducationSection from './SidebarPages/EducationSection'
import ExperienceSection from './SidebarPages/ExperienceSection'
import ProjectSection from './SidebarPages/ProjectSection'
import ThemeToggle from '../components/ThemeToggle'
const AdminPage = () => {
  const { sidebarPage, openSidebar } = useStateContext();
  return (
    <div className="flex">
      <div className="w-[25%] h-screen ">
        <div className="fixed">
          <SideBar />
        </div>
      </div>
      <div className={`h-screen `}>
        <div className={` absolute right-2 top-1   ${openSidebar ? "" : ""}`}>
          <ThemeToggle />
        </div>
        {sidebarPage === "Home Page" ? (
          <HomePage />
        ) : sidebarPage === "Personal Details" ? (
          <PersonalDetails />
        ) : sidebarPage === "Skill Section" ? (
          <SkillSection />
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
  );
}

export default AdminPage
