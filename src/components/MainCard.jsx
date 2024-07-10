import React from "react";
import SkillComponents from "./SkillComponents";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import HeadingComponent from "./HeadingComponent";
import { useStateContext } from "../context/ContextProvider";

const MainCard = ({ roundness, AboutmeBg }) => {
  const {
    getPersonalDetailsData,
    getSkills,
    getEducationData,
    getExperienceData,
    getProjectData,
  } = useStateContext();

  return (
    <div
      className={` ${AboutmeBg} dark:bg-gray-800   ${roundness} overflow-hidden w-[60rem] `}
    >
      {/* div for about me section */}
      {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
        <>
          <div className="pb-6 px-10 pt-6">
            <HeadingComponent name={"About Me"} />
            <div className=" font-poppins font-semibold text-gray-500 dark:text-gray-300 text-sm pt-4">
              <p>{getPersonalDetailsData[0].aboutme}</p>
           
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {/* div for the details section */}
      <div className=" bg-gray-50 dark:bg-gray-700 w-full px-10 font-poppins pt-">
        {getSkills && getSkills.length > 0 ? (
          <>
          <div className=" bg-gray-400 dark:bg-white h-[2px] rounded-full  mt- "></div>
            <div className="mt-6">
              <HeadingComponent name={"Skills"} />
              <SkillComponents />
            </div>
          </>
        ) : (
          <></>
        )}

        {getEducationData && getEducationData.length > 0 ? (
          <>
            <div className=" bg-gray-400 dark:bg-white h-[2px] rounded-full mb-2 mt-4 "></div>
            <div className=" mt-4">
              <HeadingComponent name={"Education"} />
              <EducationSection />
            </div>
          </>
        ) : (
          <></>
        )}

        {getExperienceData && getExperienceData.length > 0 ? (
          <>
            <div className=" bg-gray-400 dark:bg-white h-[2px] rounded-full mb-2 mt-2"></div>

            <div className=" mt-4">
              <HeadingComponent name={"Experience"} />
              <ExperienceSection />
            </div>
          </>
        ) : (
          <></>
        )}

        {getProjectData && getProjectData.length > 0 ? (
          <>
            <div className=" bg-gray-400 dark:bg-white h-[2px] rounded-full mb-2 mt-4"></div>

            <div className=" mt-4">
              <HeadingComponent name={"Projects"} />
              <ProjectSection />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MainCard;
