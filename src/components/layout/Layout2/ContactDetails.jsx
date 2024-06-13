import React from 'react'
import { TfiEmail } from 'react-icons/tfi';
import { MdLocalPostOffice } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaMobile } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useStateContext } from "../../../context/ContextProvider";


const ContactDetails = ({ linkedIn}) => {
    const { getCredentials, getPersonalDetails } = useStateContext();

  return (
    <div className="font-poppins bg-gray-800 text-gray-200 py-5 pl-12 rounded-lg grid grid-cols-2 gap-x-24 gap-y-4 mt-4">
      <div className="flex items-center gap-2">
        <MdLocalPostOffice />
        {getCredentials ? <p>{getCredentials.email}</p> : <p></p>}
      </div>

      <div className="flex items-center gap-2">
        <FaMobile />
        {getPersonalDetails ? <p>{getPersonalDetails.mobileno}</p> : <p></p>}
      </div>
      <div className="flex items-center gap-2">
        <IoLocationSharp />
        {getPersonalDetails ? <p>{getPersonalDetails.location}</p> : <p></p>}
      </div>
      <div className="flex items-center gap-2">
        <BsLinkedin />
        {getPersonalDetails ? <p>{`${getPersonalDetails.fname} ${getPersonalDetails.lname}`}</p> : <p></p>}
       
      </div>
    </div>
  );
}

export default ContactDetails
