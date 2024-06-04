import React from "react";
import SkillComponents from "./SkillComponents";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import HeadingComponent from "./HeadingComponent";

const MainCard = ({roundness, AboutmeBg}) => {
  return (
    <div
      className={` ${AboutmeBg} dark:bg-gray-800 pt-6  ${roundness} overflow-hidden w-[60rem] `}
    >
      {/* div for about me section */}
      <div className="pb-[30px] px-10">
        <HeadingComponent name={"About Me"} />
        <div className=" font-poppins font-semibold text-gray-500 dark:text-gray-300 text-sm pt-4">
          <p>
            As a software engineer, I'm driven by a passion for problem-solving
            and innovation. With a keen eye for detail and a knack for logical
            thinking, I thrive in crafting elegant solutions to complex
            technical challenges. My expertise spans across various programming
            languages and technologies, allowing me to adapt quickly to evolving
            industry trends.
            <br /> Whether it's developing scalable web applications, optimizing
            algorithms for efficiency, or collaborating with cross-functional
            teams
          </p>
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
