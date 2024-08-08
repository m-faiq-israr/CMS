import React from 'react'
import AboutSection from './AboutSection';
import ContactDetails from './ContactDetails';
import WorkExperience from './WorkExperience';
import { HiOfficeBuilding } from "react-icons/hi";
import ProjectComponent from '../../ProjectComps/ProjectComponent';
import { useStateContext } from '../../../context/ContextProvider';
import SkillTab from './SkillTab';
import { FaCodeBranch } from 'react-icons/fa';
import EducationTab from './EducationTab';
import { RiGraduationCapFill } from 'react-icons/ri';

const DetailSection = () => {
  const {
    getExperienceData,
    getProjectData,
    getPersonalDetailsData,
    getSkills,
    getEducationData,
  } = useStateContext();
  return (
    <div className=" bg-gray-50 dark:bg-gray-100 xs:px-6 sm:px-6  md:px-10 xs:py-4 sm:py-4 md:py-8 xs:rounded-b-xl  md:rounded-r-xl lg:rounded-r-xl font-poppins">
      {/* div for about details */}
      <div className="hidden md:block">
        <AboutSection />
      </div>
      <div className="xs:block sm:block md:hidden">
        {getPersonalDetailsData[0].aboutme ? (
          <>
            <h1 className="font-bold text-gray-800 text-2xl">About Me</h1>
            <p className=" text-gray-700">
              {" "}
              {getPersonalDetailsData[0].aboutme}
            </p>
          </>
        ) : (
          ""
        )}
      </div>

      {/* detail card */}
      <ContactDetails linkedIn={"M Faiq Israr"} />

      <div className="xs:block sm:block md:hidden">
        {getSkills && getSkills.length > 0 ? (
          <>
            <div className="flex items-center gap-2 text-gray-800 my-4  font-bold text-xl font-poppins">
              <div className="bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full text-gray-200">
                <FaCodeBranch />
              </div>
              <h1 className="text-2xl">Skills</h1>
            </div>
            {getSkills.map((skill, index) => (
              <div key={index} className=" flex flex-col items-start ">
                <SkillTab skillName={skill} />
              </div>
            ))}
          </>
        ) : (
          <></>
        )}

        {getEducationData && getEducationData.length > 0 ? (
          <>
            <div className="flex items-center gap-2 text-gray-800 mt-4 font-bold text-xl font-poppins">
              <div className="bg-gray-800 w-8 h-8 flex items-center justify-center rounded-full text-gray-200">
                <RiGraduationCapFill />
              </div>
              <h1 className="text-2xl ">Education</h1>
            </div>
            <div className="mt-3">
              {getEducationData.map((education, index) => (
                <EducationTab
                  instituteName={education.institute}
                  degreeName={education.degree}
                  key={index}
                />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      {/* Work Experience */}
      <div className=" xs:mt-6 sm:mt-6 md:mt-8">
        {getExperienceData && getExperienceData.length > 0 ? (
          <>
            <div className="flex items-center gap-2 text-gray-800 font-bold text-2xl font-poppins">
              <div className="bg-gray-800 xs:p-1 sm:p-1 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-gray-200">
                <HiOfficeBuilding />
              </div>
              <h1 className="lg:text-3xl">Work Experience</h1>
            </div>
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
          </>
        ) : (
          <div className=""></div>
        )}
      </div>

      {/* project section */}
      <div className="xs:mt-6 sm:mt-6 md:mt-8 mb-6">
        {getProjectData && getProjectData.length > 0 ? (
          <>
            <div className="flex items-center gap-2 text-gray-800 font-bold text-2xl font-poppins">
              <div className="bg-gray-800 xs:p-1 sm:p-1 lg:w-10 lg:h-10  flex items-center justify-center rounded-full text-gray-200">
                <HiOfficeBuilding />
              </div>
              <h1 className="lg:text-3xl">Projects</h1>
            </div>
            <div>
              {getProjectData.map((project, index) => (
                <ProjectComponent
                  key={index}
                  ProjectName={project.projectTitle}
                  techUsed={project.techUsed}
                />
              ))}
            </div>
          </>
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
}

export default DetailSection
