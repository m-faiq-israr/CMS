import React from 'react'
import { GoDotFill } from "react-icons/go";

const ExperienceComponent = ({designation, startDate, endDate, companyName, point1, point2, point3}) => {
  return (
    <div className="font-poppins text-gray-700 dark:text-gray-100 pt-1 pb-4 ">
      <div className=" flex justify-between items-center">
        <h1 className="font-bold text-lg">{designation}</h1>
        <h1 className=" italic pt-2">{`(${startDate} - ${endDate})`}</h1>
      </div>

      <div>
        <h1 className="italic font-semibold text-gray-600 dark:text-gray-200">
          {companyName}
        </h1>
      </div>

      <div className=" mt-2 font-semibold text-gray-500 dark:text-gray-300 text-sm ">
        <div className="flex items-center gap-2 mb-2">
          <div className="">
            <GoDotFill />
          </div>
          <h1>{point1}</h1>
        </div>

        <div className="flex  gap-2 mb-2">
          <div className="pt-1">
            <GoDotFill />
          </div>
          <h1>{point2}</h1>
        </div>

        <div className="flex  gap-2">
          <div className="pt-1">
            <GoDotFill />
          </div>
          <h1>{point3}</h1>
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent
