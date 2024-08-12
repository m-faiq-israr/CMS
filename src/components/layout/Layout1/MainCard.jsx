import React from "react";
import SkillComponents from "../../SkillComps/SkillComponents";
import EducationSection from "../../EducationComps/EducationSection";
import ExperienceSection from "../../ExperienceComps/ExperienceSection";
import ProjectSection from "../../ProjectComps/ProjectSection";
import HeadingComponent from "../../Headings/HeadingComponent";
import { useStateContext } from "../../../context/ContextProvider";
import { useAuth } from "../../../Firebase/AuthContext";
import ProfileCardSmall from "./ProfileCardSmall";

const MainCard = ({ roundness, AboutmeBg }) => {
  const {
    getPersonalDetailsData,
    getSkills,
    getEducationData,
    getExperienceData,
    getProjectData,
  } = useStateContext();

  const layoutName = localStorage.getItem("Layout");

  return (
    <div
      className={` ${AboutmeBg} dark:bg-gray-800   ${roundness} overflow-hidden  `}
    >
      {/* profile card shown till md */}
      <div
        className={` lg:hidden ${
          layoutName === "Layout3" ? "hidden" : "block"
        } `}
      >
        <ProfileCardSmall />
      </div>
      {/* div for about me section */}
      {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
        <>
          <div className="pb-6 px-4 md:px-10 pt-6">
            <HeadingComponent name={"About Me"} />
            <div className=" font-poppins font-semibold text-gray-500 dark:text-gray-300 text-sm pt-2 md:pt-4">
              <p>{getPersonalDetailsData[0].aboutme}</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {/* div for the details section */}
      <div className=" bg-gray-50 dark:bg-gray-700 w-full px-4 md:px-10 font-poppins pt-">
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
              <ProjectSection
                lightTextPoint={"text-gray-500"}
                darkTextPoint={"text-gray-300"}
                lightText={"text-gray-700"}
                darkText={"text-gray-100"}
                
              />
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
