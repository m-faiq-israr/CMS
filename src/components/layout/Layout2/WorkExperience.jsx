import React from 'react'
import { GoDotFill } from 'react-icons/go';
import { useStateContext } from '../../../context/ContextProvider';
const WorkExperience = ({designation, company, startDate, endDate, location, point1, point2, point3}) => {
  const { getExperienceData} = useStateContext();
  
  return (
    <div className="pb-4">
      {getExperienceData ? (
        <>
          <div className="flex items-center gap-6 ">
            <div className="pl-1 text-teal-700 ">
              <GoDotFill className="lg:text-2xl" />
            </div>
            <div className=" font-bold font-poppins text-gray-800 lg:text-xl">
              {designation}
            </div>
          </div>
          <h1 className="font-bold text-gray-700 lg:text-lg pl-14 font-poppins">
            {company}
          </h1>
          <div className="mt-1 pl-14 text-teal-700 italic xs:text-sm sm:text-sm lg:text-lg font-poppins flex justify-between">
            <p>{`${startDate} - ${endDate}`}</p>
            <p>{location}</p>
          </div>
          <div className="pl-12 flex items-center gap-2 pt-2 font-poppins text-gray-700">
            <div className="pb">
              <GoDotFill className=" text-teal-700  " />
            </div>
            <p className="xs:text-sm sm:text-sm lg:text-md">{point1}</p>
          </div>
          <div className="pl-12 flex items-center gap-2 pt-2 font-poppins text-gray-700">
            <div className="pb-">
              <GoDotFill className=" text-teal-700 xs:text-sm sm:text-sm" />
            </div>
            <p className="xs:text-sm sm:text-sm lg:text-md">{point2}</p>
          </div>
          <div className="pl-12 flex items-center gap-2 pt-2 font-poppins text-gray-700">
            <div className="pb-">
              <GoDotFill className=" text-teal-700 xs:text-sm sm:text-sm" />
            </div>
            <p className="xs:text-sm sm:text-sm lg:text-md">{point3}</p>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default WorkExperience
