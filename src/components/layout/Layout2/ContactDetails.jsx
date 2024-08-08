import React from 'react'
import { MdLocalPostOffice } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaMobile } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useStateContext } from "../../../context/ContextProvider";
import { useAuth } from '../../../Firebase/AuthContext';

const ContactDetails = ({ linkedIn}) => {
  const {user} = useAuth();
    const {  getPersonalDetailsData } =
      useStateContext();

  return (
    <div className="font-poppins bg-gray-800 text-gray-200 xs:py-3 xs:px-2 sm:px-4 sm:py-4 lg:py-5 lg:px-12 rounded-lg grid grid-cols-2 xs:gap-x-6 sm:gap-x-6 lg:gap-x-24 gap-y-4 mt-4 xs:text-sm sm:text-sm lg:text-md ">
      <div className="flex items-center  gap-2 ">
        <MdLocalPostOffice />
        {user ? <p>{user.email}</p> : <p></p>}
      </div>

      <div className="flex items-center gap-2">
        {getPersonalDetailsData[0].mobileno ? (
          <>
            <FaMobile />
            <p>{getPersonalDetailsData[0].mobileno}</p>
          </>
        ) : (
          <p></p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {getPersonalDetailsData[0].location ? (
          <>
            <IoLocationSharp />
            <p>{getPersonalDetailsData[0].location}</p>
          </>
        ) : (
          <p></p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
          <>
            <BsLinkedin />
            <p>{`${getPersonalDetailsData[0].fname} ${getPersonalDetailsData[0].lname}`}</p>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default ContactDetails
