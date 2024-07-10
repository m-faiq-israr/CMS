import React from 'react'

const EducationTab = ({instituteName, degreeName}) => {
  return (
    <div className="font-poppins xs:text-gray-700 sm:text-gray-700 md:text-gray-300 pb-6">
      <h1 className="font-bold text-md ">{instituteName}</h1>
      <h1 className="italic xs:text-gray-700 sm:text-gray-700 md:text-gray-400">
        {degreeName}
      </h1>
    </div>
  );
}

export default EducationTab
