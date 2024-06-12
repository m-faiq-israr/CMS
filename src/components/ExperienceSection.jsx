import React from "react";
import ExperienceComponent from "./ExperienceComponent";
import { useStateContext } from "../context/ContextProvider";
const ExperienceSection = () => {
  const { storedExperienceData } = useStateContext();
  return (
    <div>
      {storedExperienceData.map((experience, index) => (
        <ExperienceComponent
          key={index}
          companyName={experience.companyName}
          designation={experience.designation}
          startDate={experience.startDate}
          endDate={experience.endDate}
          point1={experience.point1}
          point2={experience.point2}
          point3={experience.point3}
        />
      ))}
      {/* <ExperienceComponent
        companyName={"AtomPoint"}
        designation={"Intern - Full Stack Developer"}
        startDate={"May 2024"}
        endDate={"present"}
        point1={
          "Collaborated with the IT team to identify areas for improvement in the company's dealership web portal."
        }
        point2={
          "Contributed to the enhancement of the web portal's user interface and functionality through active participation in design discussions and implementation efforts."
        }
        point3={
          "Demonstrated adaptability and a willingness to learn frontend and backend of the web applications during the internship period."
        }
      /> */}

      {/* <ExperienceComponent
        companyName={"Pak Suzuki Motor Company Limited"}
        designation={"Intern - IT Department"}
        startDate={"March 2024"}
        endDate={"April 2024"}
        point1={
          "Collaborated with the IT team to identify areas for improvement in the company's dealership web portal."
        }
        point2={
          "Contributed to the enhancement of the web portal's user interface and functionality through active participation in design discussions and implementation efforts."
        }
        point3={
          "Demonstrated adaptability and a willingness to learn frontend and backend of the web applications during the internship period."
        }
      /> */}
    </div>
  );
};

export default ExperienceSection;
