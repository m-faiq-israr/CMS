import React from 'react'
import { FaLaptopCode, FaMobileScreenButton } from "react-icons/fa6";
import { BsCamera2 } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import SkillsCard from "./SkillsCard";
const SkillComponents = () => {
  return (
    <div>
      {/* <div className=" bg-gray-400 dark:bg-white h-[2px] rounded-full mb-2 mt-4"></div> */}

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 md:grid-cols-2  pt-4 pb-8">
        <SkillsCard
          title="Web Design"
          description={
            "The most modern and high qualtiy design made at professional level."
          }
          icon={CgWebsite}
          iconStyles={{ fontSize: "35px" }}
        />

        <SkillsCard
          title="Web Development"
          description={
            "High qualtiy development of the sites at a professional level."
          }
          icon={FaLaptopCode}
          iconStyles={{ fontSize: "35px" }}
        />

        <SkillsCard
          title="Mobile Apps"
          description={
            "Professional development of applications for iOS and Android."
          }
          icon={FaMobileScreenButton}
          iconStyles={{ fontSize: "35px" }}
        />

        <SkillsCard
          title="Photography"
          description={
            "I make high quality photos of every category at professional level."
          }
          icon={BsCamera2}
          iconStyles={{ fontSize: "35px" }}
        />
      </div>
    </div>
  );
}

export default SkillComponents
