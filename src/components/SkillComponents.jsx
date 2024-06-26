import React from 'react'
import SkillsCard from "./SkillsCard";
import { useStateContext } from '../context/ContextProvider';
const SkillComponents = () => {
  // const skills = JSON.parse(localStorage.getItem('skills'));
  const {getSkills} = useStateContext();

  return (
    <>
      {getSkills ? (
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 md:grid-cols-2  pt-4 pb-8">
          {getSkills.map((skill, index) => (
            <SkillsCard title={skill} key={index} />
          ))}
        </div>
      ) : (
        <div className="mb-28"></div>
      )}
    </>
  );
}

export default SkillComponents
