import React from 'react'
import { useStateContext } from '../../../context/ContextProvider';
const AboutSection = () => {
  const {  getPersonalDetailsData } = useStateContext();
  return (
    <>
      {getPersonalDetailsData ? (
        <div className="font-poppins">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 pt-8">{`${getPersonalDetailsData[0].fname} ${getPersonalDetailsData[0].lname}`}</h1>
            <h1 className=" text-teal-700 text-lg mt-1">
              {getPersonalDetailsData[0].profession}
            </h1>
          </div>

          <div className="pt-3 text-gray-700">
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
