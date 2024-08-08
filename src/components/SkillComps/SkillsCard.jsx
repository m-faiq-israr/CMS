import React from 'react'

const SkillsCard = ({title}) => {
  return (
    <div className=" text-center rounded-xl bg-white dark:bg-gray-500 shadow-gray-300 shadow-md dark:shadow-none font-poppins px-3 py-2 lg:py-3 lg:px-4">
      
        <h1 className=' text-gray-600 dark:text-gray-100 lg:text-xl  font-bold pb-1 '>{title}</h1>
    
    </div>
  );
}

export default SkillsCard
