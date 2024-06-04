import React from 'react'
import { GoDotFill } from 'react-icons/go';

const WorkExperience = ({designation, company, startDate, endDate, location, point1, point2, point3}) => {
  return (
    <div className='pb-4'>
      <div className="flex items-center gap-6 ">
        <div className="pl-1 text-teal-700 ">
          <GoDotFill size={"25px"} />
        </div>
        <div className=" font-bold font-poppins text-gray-800 text-xl">
          {designation}
        </div>
      </div>
      <h1 className="font-bold text-gray-700 text-lg pl-14 font-poppins">
        {company}
      </h1>
      <div className="mt-1 pl-14 text-teal-700 italic font-poppins flex justify-between">
        <h1>{`${startDate} - ${endDate}`}</h1>
        <h1>{location}</h1>
      </div>
      <div className="pl-12 flex items-center gap-2 pt-2 font-poppins text-gray-700">
        <div className="pb-6">
          <GoDotFill className=" text-teal-700" />
        </div>
        <h1>{point1}</h1>
      </div>
      <div className="pl-12 flex items-center gap-2 pt-2 font-poppins text-gray-700">
        <div className="pb-6">
          <GoDotFill className=" text-teal-700" />
        </div>
        <h1>{point2}</h1>
      </div>
      <div className="pl-12 flex items-center gap-2 pt-2 font-poppins text-gray-700">
        <div className="pb-6">
          <GoDotFill className=" text-teal-700" />
        </div>
        <h1>{point3}</h1>
      </div>
    </div>
  );
}

export default WorkExperience
