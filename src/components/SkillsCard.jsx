import React from 'react'

const SkillsCard = ({title}) => {
  return (
    <div className=" text-center rounded-xl bg-white dark:bg-gray-500 shadow-gray-300 shadow-md dark:shadow-none font-poppins py-3 px-4">
      
        <h1 className=' text-gray-600 dark:text-gray-100 text-xl  font-bold pb-1 '>{title}</h1>
    
    </div>
  );
}

export default SkillsCard
