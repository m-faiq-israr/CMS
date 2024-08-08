import React from "react";
import MyImage from "../../../assets/myImg1.jpg";
import { FaGithub, FaLinkedinIn, FaMobileAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { useStateContext } from "../../../context/ContextProvider";
import { useAuth } from "../../../Firebase/AuthContext";
import userPic from '../../../assets/user1.png'
const ProfileComp = () => {
    const { getCredentials, getPersonalDetails, getPersonalDetailsData } =
      useStateContext();
    const {user, userImage} = useAuth();

  return (
    <div className=" rounded-t-2xl bg-gray-100 dark:bg-gray-900 pt-6 pb-6 px-5 flex justify-between items-center  ">
      <div className="flex gap-4">
        {/* div for the image */}
        <div className=" rounded-full w-24 h-24 md:h-40 md:w-40 ring-4 md:ring-8 ring-blue-800   ">
          <img
            className="w-full h-full object-cover rounded-full "
            src={userImage ? userImage : userPic}
            alt="Picture not available"
          />
        </div>

        <div className="pt-4 flex flex-col justify-center items-center">
          {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
            <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-white pb-1 sm:pb-2 md:pb-5">
              {`${getPersonalDetailsData[0].fname} ${getPersonalDetailsData[0].lname}`}
            </h1>
          ) : (
            <h1></h1>
          )}
          {getPersonalDetailsData[0].profession ? (
            <div className="flex items-center justify-center bg-gray-200 px-1 md:px-3 md:py-1  text-center rounded-full text-xs md:text-base text-gray-500 dark:text-gray-900  font-poppins">
              <h3>{getPersonalDetailsData[0].profession}</h3>
            </div>
          ) : (
            <h3></h3>
          )}
          {/* <div className="flex justify- items-center gap-4 text-gray-700 dark:text-white pt-5">
            <FaGithub className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
            <FaXTwitter className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
            <FaLinkedinIn className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
          </div> */}
        </div>
      </div>
      <div>
        <div className=" text-gray-500 dark:text-gray-300 text-xs md:text-base space-y-3  pt-4 font-poppins">
          <div className="flex justify-start items-center space-x-2">
            {getPersonalDetailsData[0].dob ? (
              <>
                <IoCalendarOutline />
                <p>{getPersonalDetailsData[0].dob}</p>
              </>
            ) : (
              <p></p>
            )}
          </div>

          <div className="flex justify-start items-center space-x-2">
            {getPersonalDetailsData[0].location ? (
              <>
                <GoLocation style={{ fontSize: "15px" }} />
                <p>{getPersonalDetailsData[0].location}</p>
              </>
            ) : (
              <p></p>
            )}
          </div>

          <div className="flex justify-start items-center space-x-2">
            <TfiEmail style={{ fontSize: "15px" }} />
            {user ? <p>{user.email}</p> : <p></p>}
          </div>

          <div className="flex justify-start items-center space-x-2">
            {getPersonalDetailsData[0].mobileno ? (
              <>
                <FaMobileAlt style={{ fontSize: "15px" }} />
                <p>{getPersonalDetailsData[0].mobileno}</p>
              </>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
