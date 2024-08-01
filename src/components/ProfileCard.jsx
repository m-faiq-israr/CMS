import React from "react";
import Button from "./Button";
import { IoCalendarOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaMobileAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { SiSkypeforbusiness } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import MyImage from "../assets/myImg1.jpg";
import userPic from "../assets/user1.png"
import { useStateContext } from "../context/ContextProvider";
import { useAuth } from "../Firebase/AuthContext";
import { Tooltip } from "react-tooltip";
const ProfileCard = () => {
  const { getPersonalDetailsData } = useStateContext();
  const {user, userImage} = useAuth();


  return (
    <div className="relative">
      {/* div for the image */}
      <div className="relative   w-36 h-36 z-10 top-20 left-14 rounded-3xl">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={userImage ? userImage : userPic}
          alt="Picture not available"
        />
      </div>

      {/* div for the details */}
      <div className="bg-white dark:bg-gray-800 w-64 h-[30rem] flex flex-col items-center rounded-2xl overflow-hidden font-poppins">
        <div
          style={{ height: "45%" }}
          className="mt-24 space-y-2 flex flex-col items-center justify-center -ml-"
        >
          {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
            <h1 className="text-3xl font-bold text-gray-700 dark:text-white pb-2 text-center">
              {`${getPersonalDetailsData[0].fname} ${getPersonalDetailsData[0].lname}`}
            </h1>
          ) : (
            <h1></h1>
          )}
          <div className="flex items-center justify-center bg-gray-200  py-1 px-4 text-center rounded-full text-sm text-gray-500 dark:text-gray-900 ">
            {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
              <h3>{getPersonalDetailsData[0].profession}</h3>
            ) : (
              <h3></h3>
            )}
          </div>
          <div className="flex justify-center items-center gap-4 text-gray-700 dark:text-white py-2">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Github"
              data-tooltip-place="top"
            >
              <FaGithub className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
            </a>
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Twitter"
              data-tooltip-place="top"
            >
              <FaXTwitter className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
            </a>
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="LinkedIn"
              data-tooltip-place="top"
            >
              <FaLinkedinIn className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
            </a>
          </div>
        </div>

        <div
          style={{ height: "55%" }}
          className=" bg-gray-100 dark:bg-gray-700 w-full py-8 "
        >
          <div className="pl-6 text-gray-500 dark:text-gray-300 text-sm space-y-3">
            <div className="flex justify-start items-center space-x-2">
              <IoCalendarOutline />
              {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
                <p>{getPersonalDetailsData[0].dob}</p>
              ) : (
                <p></p>
              )}
            </div>

            <div className="flex justify-start items-center space-x-2">
              <GoLocation style={{ fontSize: "15px" }} />
              {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
                <p>{getPersonalDetailsData[0].location}</p>
              ) : (
                <p></p>
              )}
            </div>

            <div className="flex justify-start items-center space-x-2">
              <TfiEmail style={{ fontSize: "15px" }} />
              {user ? <p>{user.email}</p> : <p></p>}
            </div>

            <div className="flex justify-start items-center space-x-2">
              <FaMobileAlt style={{ fontSize: "15px" }} />
              {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
                <p>{getPersonalDetailsData[0].mobileno}</p>
              ) : (
                <p></p>
              )}
            </div>

            {/* <div className="flex justify-start items-center space-x-2">
              <SiSkypeforbusiness style={{ fontSize: "15px" }} />

              <p>faiq_israr</p>
            </div> */}
          </div>
          <div className="flex items-center justify-center pt-4">
            <Button bgColor={"blue-600"} hoverColor={"blue-700"} />
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default ProfileCard;
