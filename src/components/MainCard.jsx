import React from "react";
import SkillComponents from "./SkillComponents";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import HeadingComponent from "./HeadingComponent";
import { useStateContext } from "../context/ContextProvider";

const MainCard = ({roundness, AboutmeBg}) => {
    const {  getPersonalDetailsData } = useStateContext();

  return (
    <div
      className={` ${AboutmeBg} dark:bg-gray-800 pt-6  ${roundness} overflow-hidden w-[60rem] `}
    >
      {/* div for about me section */}
      <div className="pb-[30px] px-10">
        <HeadingComponent name={"About Me"} />
        <div className=" font-poppins font-semibold text-gray-500 dark:text-gray-300 text-sm pt-4">
          {getPersonalDetailsData ? (
            <p>{getPersonalDetailsData[0].aboutme}</p>
          ) : (
            <p className="mb-16"></p>
          )}
          <p></p>
        </div>
      </div>
      <div className=" bg-gray-400 dark:bg-white h-[2px] rounded-full  mt-4 "></div>

      {/* div for the details section */}
      <div className=" bg-gray-50 dark:bg-gray-700 w-full px-10 font-poppins pt-2">
        <div className="mt-2">
          <HeadingComponent name={"Skills"} />

          <SkillComponents />
        </div>
        <div className=" bg-gray-400 dark:bg-white h-[2px] rounded-full mb-2 mt-4 "></div>

        <div className=" mt-4">
          <HeadingComponent name={"Education"} />
          <EducationSection />
        </div>

        <div className=" bg-gray-400 dark:bg-white h-[2px] rounded-full mb-2 mt-2"></div>
        <div className=" mt-4">
          <HeadingComponent name={"Experience"} />
          <ExperienceSection />
        </div>
        <div className=" bg-gray-400 dark:bg-white h-[2px] rounded-full mb-2 mt-4"></div>

        <div className=" mt-4">
          <HeadingComponent name={"Projects"} />
          <ProjectSection />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
