import React from "react";
import MyImage from "../../../assets/myImg1.jpg";
import { FaGithub, FaLinkedinIn, FaMobileAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { useStateContext } from "../../../context/ContextProvider";

const ProfileComp = () => {
    const { getCredentials, getPersonalDetails } = useStateContext();

  return (
    <div className="w-[60rem] rounded-t-2xl bg-gray-100 dark:bg-gray-900 pt-6 pb-6 px-5 flex justify-between items-center  ">
      <div className="flex gap-4">
        {/* div for the image */}
        <div className=" rounded-full h-40 w-40 ring-8 ring-blue-800   ">
          <img
            className="w-full h-full object-cover rounded-full "
            src={MyImage}
            alt="Picture not available"
          />
        </div>

        <div className="pt-4 flex flex-col justify-center items-center">
          {getPersonalDetails ? (
            <h1 className="text-4xl font-bold text-gray-700 dark:text-white pb-5">
              {`${getPersonalDetails.fname} ${getPersonalDetails.lname}`}
            </h1>
          ) : (
            <h1></h1>
          )}
          <div className="flex items-center justify-center bg-gray-200 w-40 h-6 text-center rounded-full text-sm text-gray-500 dark:text-gray-900  font-poppins">
            {getPersonalDetails ? (
              <h3>{getPersonalDetails.profession}</h3>
            ) : (
              <h3></h3>
            )}
          </div>
          <div className="flex justify- items-center gap-4 text-gray-700 dark:text-white pt-5">
            <FaGithub className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
            <FaXTwitter className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
            <FaLinkedinIn className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
          </div>
        </div>
      </div>
      <div>
        <div className=" text-gray-500 dark:text-gray-300 text-md space-y-3  pt-4 font-poppins">
          <div className="flex justify-start items-center space-x-2">
            <IoCalendarOutline />
            {getPersonalDetails ? <p>{getPersonalDetails.dob}</p> : <p></p>}
          </div>

          <div className="flex justify-start items-center space-x-2">
            <GoLocation style={{ fontSize: "15px" }} />
            {getPersonalDetails ? (
              <p>{getPersonalDetails.location}</p>
            ) : (
              <p></p>
            )}
          </div>

          <div className="flex justify-start items-center space-x-2">
            <TfiEmail style={{ fontSize: "15px" }} />
            {getPersonalDetails ? <p>{getCredentials.email}</p> : <p></p>}
          </div>

          <div className="flex justify-start items-center space-x-2">
            <FaMobileAlt style={{ fontSize: "15px" }} />
            {getPersonalDetails ? <p>{getPersonalDetails.mobileno}</p> : <p></p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
