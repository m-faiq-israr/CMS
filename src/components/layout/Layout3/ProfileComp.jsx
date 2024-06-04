import React from "react";
import MyImage from "../../../assets/myImg1.jpg";
import { FaGithub, FaLinkedinIn, FaMobileAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
const ProfileComp = () => {
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
          <h1 className="text-4xl font-bold text-gray-700 dark:text-white pb-5">
            M Faiq Israr
          </h1>
          <div className="flex items-center justify-center bg-gray-200 w-40 h-6 text-center rounded-full text-sm text-gray-500 dark:text-gray-900  font-poppins">
            <h3>Software Engineer</h3>
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
            <p>December 1, 2003</p>
          </div>

          <div className="flex justify-start items-center space-x-2">
            <GoLocation style={{ fontSize: "15px" }} />
            <p>Karachi, Pakistan</p>
          </div>

          <div className="flex justify-start items-center space-x-2">
            <TfiEmail style={{ fontSize: "15px" }} />
            <p>mfaiqisrar@gmail.com</p>
          </div>

          <div className="flex justify-start items-center space-x-2">
            <FaMobileAlt style={{ fontSize: "15px" }} />
            <p>+92-3402311232</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
