import React from 'react'
import AboutSection from './AboutSection';
import ContactDetails from './ContactDetails';
import WorkExperience from './WorkExperience';
import { HiOfficeBuilding } from "react-icons/hi";
import ProjectComponent from './ProjectComponent';
import { useStateContext } from '../../../context/ContextProvider';

const DetailSection = () => {
  const {
    getExperienceData,
    getProjectData,
  } = useStateContext();
  return (
    <div className="bg-gray-50 dark:bg-gray-100 w-[60rem] pl-10 pr-10 pt-8 rounded-r-xl">
      {/* div for about details */}
      <AboutSection />

      {/* detail card */}
      <ContactDetails linkedIn={"M Faiq Israr"} />

      {/* Work Experience */}
      <div className="mt-8">
        <div className="flex items-center gap-2 text-gray-800 font-bold text-2xl font-poppins">
          <div className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full text-gray-200">
            <HiOfficeBuilding />
          </div>
          <h1 className="text-3xl">Work Experience</h1>
        </div>
        {getExperienceData ? (
          <div className="mt-4">
            {getExperienceData.map((experience, index) => (
              <WorkExperience
                key={index}
                company={experience.companyName}
                designation={experience.designation}
                startDate={experience.startDate}
                endDate={experience.endDate}
                location={experience.location}
                point1={experience.point1}
                point2={experience.point2}
                point3={experience.point3}
              />
            ))}
          </div>
        ) : (
          <div className="mt-4 mb-60"></div>
        )}
      </div>

      {/* project section */}
      <div className="mt-4 mb-6">
        <div className="flex items-center gap-2 text-gray-800 font-bold text-2xl font-poppins">
          <div className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full text-gray-200">
            <HiOfficeBuilding />
          </div>
          <h1 className="text-3xl">Projects</h1>
        </div>
        {getProjectData ? (
          <div>
            {getProjectData.map((project, index) => (
              <ProjectComponent
                key={index}
                ProjectName={project.projectTitle}
                techUsed={project.techUsed}
              />
            ))}
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
}

export default DetailSection
