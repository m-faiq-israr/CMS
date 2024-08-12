import React from 'react'
import { GoDotFill } from 'react-icons/go';

const ProjectComponent = ({
  projectName,
  techUsed,
  point1,
  lightTextPoint,
  darkTextPoint,
  lightText,
  darkText,
  dotColor
}) => {
  return (
    <div className={`font-poppins ${lightText} dark:${darkText} pt-1 pb-4 `}>
      <div className="flex items-center">
        <h1 className="font-bold md:text-lg">
          {projectName} <span className=" font-normal mr-1">|</span>
        </h1>
        <h1 className=" italic text-sm md:text-base">{techUsed}</h1>
      </div>

      <div className={` mt-2 font-semibold ${lightTextPoint} dark:${darkTextPoint} text-sm `}>
        <div className="flex gap-2 mb-2 ">
          <div className="pt-1">
            <GoDotFill className={`${dotColor}`}/>
          </div>
          <h1>{point1}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent
