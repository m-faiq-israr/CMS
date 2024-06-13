import React from 'react'
import { useStateContext } from '../../../context/ContextProvider';
const AboutSection = () => {
  const { getPersonalDetails} = useStateContext();
  return (
    <>
      {getPersonalDetails ? (
        <div className="font-poppins">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 pt-8">{`${getPersonalDetails.fname} ${getPersonalDetails.lname}`}</h1>
            <h1 className=" text-teal-700 text-lg mt-1">
              {getPersonalDetails.profession}
            </h1>
          </div>

          <div className="pt-3 text-gray-700">
            <p>{getPersonalDetails.aboutme}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default AboutSection
