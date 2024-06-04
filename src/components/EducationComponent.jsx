import React from 'react'
import { GoDotFill } from "react-icons/go";

const EducationComponent = ({InstitueName, startDate, endDate, degree, cgpa}) => {
  return (
    <div className="font-poppins text-gray-700 dark:text-gray-100 pt-2 pb-4 ">
      
      <div className=" flex justify-between">
        <div className='flex items-center gap-2'>
          <GoDotFill/>
          <h1 className='font-bold text-lg'>{InstitueName}</h1>
        </div>
        <h1 className=" italic">{`(${startDate} - ${endDate})`}</h1>
      </div>

      <div className=" flex justify-between pl-6">
        <h1 className="italic font-semibold text-gray-500 dark:text-gray-300">{degree}</h1>
        <h1>{`CGPA: ${cgpa}`}</h1>
      </div>
    </div>
  );
}

export default EducationComponent
