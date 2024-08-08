import React from 'react'
import { GoDotFill } from "react-icons/go";

const EducationComponent = ({InstitueName, startDate, endDate, degree, cgpa}) => {
  return (
    <div className="font-poppins text-gray-700 dark:text-gray-100 pt-2 pb-4 ">
      <div className=" flex justify-between gap-14">
        <div className="flex items-center gap-2">
          <GoDotFill />
          <h1 className="font-bold md:text-lg">{InstitueName}</h1>
        </div>
        <h1 className=" italic text-sm md:text-base ">{`(${startDate} - ${endDate})`}</h1>
      </div>

      <div className=" flex justify-between pl-6">
        <h1 className="italic font-semibold text-gray-500 dark:text-gray-300 text-sm md:text-base">
          {degree}
        </h1>
        <h1 className="text-sm md:text-base ">{`CGPA: ${cgpa}`}</h1>
      </div>
    </div>
  );
}

export default EducationComponent
