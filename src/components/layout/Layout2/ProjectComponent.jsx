import React from 'react'
import { GoDotFill } from 'react-icons/go';

const ProjectComponent = ({ ProjectName, techUsed }) => {
  return (
    <div>
      <div className="flex items-center gap-6 mt-4">
        <div className="pl-1 text-teal-700 ">
          <GoDotFill className="lg:text-2xl" />
        </div>
        <div className="flex">
          <div className=" font-bold font-poppins text-gray-800 lg:text-xl ">
            {ProjectName}
            <span className=" font-bold mx-1">|</span>
          </div>
          <div className="font-bold font-poppins  lg:text-lg italic text-teal-700">
            {techUsed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent
