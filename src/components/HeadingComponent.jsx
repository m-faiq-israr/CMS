import React from 'react'

const HeadingComponent = ({name}) => {
  return (
    <div className=" font-poppins text-3xl font-bold text-gray-700 dark:text-white ">
      <h1>{name}</h1>
      <div className="bg-blue-800 w-12 h-1.5 rounded-full mt-1 "></div>
    </div>
  );
}

export default HeadingComponent
