import React from "react";
import MyImage from "../../../assets/myImg1.jpg";
import { FaCodeBranch } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoLanguageSharp } from "react-icons/io5";

import SkillTab from "./SkillTab";
import EducationTab from "./EducationTab";
import LanguageTab from "./LanguageTab";
import Button from "../../Button";

const ProfileSection = () => {
  return (
    <div className=" bg-gray-800 w-[20rem]  pt-10 rounded-l-xl">
      {/* div for the image */}
      <div className=" rounded-full h-40 w-40 ml-20  ring-8 ring-emerald-600  ">
        <img
          className="w-full h-full object-cover rounded-full"
          src={MyImage}
          alt="Picture not available"
        />
      </div>

      {/* skills section */}
      <div className="pl-6 pt-14 ">
        <div className="flex items-center gap-2 text-gray-200 font-bold text-xl font-poppins">
          <div className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full text-gray-800">
            <FaCodeBranch />
          </div>
          <h1 className="text-2xl">Skills</h1>
        </div>
        <div className="mt-4 flex flex-col items-start ">
          <SkillTab skillName={"Web Development"} />
          <SkillTab skillName={"Web Design"} />
          <SkillTab skillName={"Android Development"} />
          <SkillTab skillName={"Software Requiements"} />
          <SkillTab skillName={"Artificial Intelligence"} />
          <SkillTab skillName={"Video Editing"} />
          <SkillTab skillName={"Software Testing"} />
        </div>
      </div>

      {/* Education Section */}
      <div className="pl-6 pt-12 ">
        <div className="flex items-center gap-2 text-gray-200 font-bold text-xl font-poppins">
          <div className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full text-gray-800">
            <RiGraduationCapFill />
          </div>
          <h1 className="text-2xl">Education</h1>
        </div>
        <div className="mt-4">
          <EducationTab
            instituteName={"NED University of Engineering & Technology"}
            degreeName={"Bachelors in Software Engineering"}
          />
          <EducationTab
            instituteName={"AdamJee Government Science College"}
            degreeName={"Intermediate"}
          />
          <EducationTab
            instituteName={"Quaid-e-Azam Rangers School"}
            degreeName={"Matriculation"}
          />
        </div>
      </div>

      {/* Language Seciton */}
      <div className="pl-6 pt-8">
        <div className="flex items-center gap-2 text-gray-200 font-bold text-xl font-poppins">
          <div className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full text-gray-800">
            <IoLanguageSharp />
          </div>
          <h1 className="text-2xl">Languages</h1>
        </div>
        <div className="mt-4">
          <LanguageTab
            language={"English"}
            proficiency={"Professional Working Proficiency"}
          />
          <LanguageTab
            language={"Urdu"}
            proficiency={"Native or Bilingual Proficiency"}
          />
        </div>
      </div>

      {/* download cv button */}
      <div className="flex justify-center pt-8 pb-8">
        <Button bgColor={"teal-700"} hoverColor={"blue-800"} />
      </div>
    </div>
  );
};

export default ProfileSection;
