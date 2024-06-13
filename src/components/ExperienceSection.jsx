import React from "react";
import ExperienceComponent from "./ExperienceComponent";
import { useStateContext } from "../context/ContextProvider";
const ExperienceSection = () => {
  const { storedExperienceData } = useStateContext();
  return (
    <>
      {storedExperienceData ? (
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
        </div>
      ) : (
        <div className="mb-28"></div>
      )}
    </>
  );
};

export default ExperienceSection;
