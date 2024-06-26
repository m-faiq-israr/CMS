import React from 'react'
import { TfiEmail } from 'react-icons/tfi';
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
    <div className="font-poppins bg-gray-800 text-gray-200 py-5 pl-12 rounded-lg grid grid-cols-2 gap-x-24 gap-y-4 mt-4">
      <div className="flex items-center gap-2">
        <MdLocalPostOffice />
        {user ? <p>{user.email}</p> : <p></p>}
      </div>

      <div className="flex items-center gap-2">
        <FaMobile />
        {getPersonalDetailsData ? (
          <p>{getPersonalDetailsData[0].mobileno}</p>
        ) : (
          <p></p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <IoLocationSharp />
        {getPersonalDetailsData ? (
          <p>{getPersonalDetailsData[0].location}</p>
        ) : (
          <p></p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <BsLinkedin />
        {getPersonalDetailsData ? (
          <p>{`${getPersonalDetailsData[0].fname} ${getPersonalDetailsData[0].lname}`}</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default ContactDetails
