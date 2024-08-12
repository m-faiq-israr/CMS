import React from "react";
import MyImage from "../../../assets/myImg1.jpg";
import { FaCodeBranch } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
// import userPic from "../../../assets/user1.png";
import SkillTab from "./SkillTab";
import EducationTab from "./EducationTab";

import { useStateContext } from "../../../context/ContextProvider";
import { useAuth } from "../../../Firebase/AuthContext";
import AboutSection from "./AboutSection";
const ProfileSection = () => {
  const { getEducationData, getSkills, getPersonalDetailsData } =
    useStateContext();
  const { userImage } = useAuth();

  return (
    <div className="  bg-gray-800  pl-6 pr-6  md:pt-10 xs:rounded-t-xl sm:rounded-t- md:rounded-l-xl xs:flex ">
      {/* div for the image */}
      <div className="flex items-center  gap-5">
        <div className=" rounded-full xs:my-4 sm:my-4 xs:h-28 xs:w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 ml- inline-flex justify-center items-center  ring-4 ring-emerald-600  ">
          <img
            className="w-full h-full object-cover rounded-full"
            src={userImage ? userImage : "/user1.png"}
            alt="Picture not available"
          />
        </div>
        <div className=" xs:block sm:block md:hidden">
          {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
            <AboutSection />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="xs:hidden sm:hidden md:block">
        {/* skills section */}
        {getSkills !== null ? (
          <>
            <div className=" md:pt-14 ">
              <div className="flex items-center gap-2 text-gray-200 font-bold text-xl font-poppins">
                <div className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full text-gray-800">
                  <FaCodeBranch />
                </div>
                <h1 className="text-2xl">Skills</h1>
              </div>
              <div className="mt-4">
              
                {getSkills && getSkills.map((skill, index) => (
                  <div key={index} className=" flex flex-col items-start ">
                    <SkillTab skillName={skill} />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {/* Education Section */}
        {getEducationData && getEducationData.length > 0 ? (
          <>
            <div className=" md:pt-12 ">
              <div className="flex items-center gap-2 text-gray-200 font-bold text-xl font-poppins">
                <div className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full text-gray-800">
                  <RiGraduationCapFill />
                </div>
                <h1 className="text-2xl">Education</h1>
              </div>
              <div className="mt-4">
                {getEducationData.map((education, index) => (
                  <EducationTab
                    instituteName={education.institute}
                    degreeName={education.degree}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      {/* download cv button */}
      {/* <div className="flex justify-center items-end pt-8 pb-8">
        <Button bgColor={"teal-700"} hoverColor={"blue-800"} />
      </div> */}
    </div>
  );
};

export default ProfileSection;
