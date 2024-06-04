import React from 'react'
import { GoDotFill } from 'react-icons/go';

const ProjectComponent = ({projectName, techUsed, point1, point2, point3}) => {
  return (
    <div className="font-poppins text-gray-700 dark:text-gray-100 pt-1 pb-4 ">
      <div className="flex items-center">
        <h1 className="font-bold text-lg">
          {projectName} <span className=" font-normal mr-1">|</span>
        </h1>
        <h1 className=" italic">{techUsed}</h1>
      </div>

      <div className=" mt-2 font-semibold text-gray-500 dark:text-gray-300 text-sm ">
        <div className="flex gap-2 mb-2 ">
          <div className="pt-1">
            <GoDotFill />
          </div>
          <h1>{point1}</h1>
        </div>

        
      </div>
    </div>
  );
}

export default ProjectComponent
