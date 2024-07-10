import React from 'react'
import { useStateContext } from '../../../context/ContextProvider';
const AboutSection = () => {
  const {  getPersonalDetailsData } = useStateContext();
  return (
    <>
      {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
        <div className="font-poppins">
          <div>
            <h1 className="xs:text-2xl sm:text-3xl md:text-5xl font-bold xs:text-gray-200 sm:text-gray-200 md:text-gray-800 md:pt-8">{`${getPersonalDetailsData[0].fname} ${getPersonalDetailsData[0].lname}`}</h1>
            <h1 className="xs:text-teal-600 sm:text-teal-600 md:text-teal-700 sm:text-lg mt-1">
              {getPersonalDetailsData[0].profession}
            </h1>
          </div>

          <div className="pt-3 text-gray-700 hidden md:block">
            <p>{getPersonalDetailsData[0].aboutme}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default AboutSection
