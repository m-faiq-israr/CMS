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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import MyImage from "../assets/myImg1.jpg";
import { useStateContext } from "../context/ContextProvider";

const ProfileCard = () => {
  const { getCredentials, getPersonalDetails } = useStateContext();
 

  const showToast = () => {
    toast.success("CV Downloaded", {
      autoClose: 1000,
      hideProgressBar: true,
      loading: false,
      pauseOnFocusLoss: false,
      className: "bg-green-400 text-white rounded-3xl font-poppins font-bold ",
    });

  };
  return (
    <div className="relative">
      {/* div for the image */}
      <div className="relative   w-36 h-36 z-10 top-20 left-14 rounded-3xl">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={MyImage}
          alt="Picture not available"
        />
      </div>

      {/* div for the details */}
      <div className="bg-white dark:bg-gray-800 w-64 h-[30rem] flex flex-col items-center rounded-2xl overflow-hidden font-poppins">
        <div
          style={{ height: "45%" }}
          className="mt-24 space-y-2 flex flex-col items-center justify-center -ml-"
        >
          <h1 className="text-3xl font-bold text-gray-700 dark:text-white pb-2 text-center">
            {`${getPersonalDetails.fname} ${getPersonalDetails.lname}`}
          </h1>
          <div className="flex items-center justify-center bg-gray-200 w-40 h-6 text-center rounded-full text-sm text-gray-500 dark:text-gray-900 ">
            <h3>{getPersonalDetails.profession}</h3>
          </div>
          <div className="flex justify-center items-center gap-4 text-gray-700 dark:text-white pt-2">
            <FaGithub className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
            <FaXTwitter className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
            <FaLinkedinIn className="hover:text-black hover:cursor-pointer dark:hover:text-gray-400" />
          </div>
        </div>

        <div
          style={{ height: "55%" }}
          className=" bg-gray-100 dark:bg-gray-700 w-full py-8 "
        >
          <div className="pl-6 text-gray-500 dark:text-gray-300 text-sm space-y-3">
            <div className="flex justify-start items-center space-x-2">
              <IoCalendarOutline />
              <p>{getPersonalDetails.dob}</p>
            </div>

            <div className="flex justify-start items-center space-x-2">
              <GoLocation style={{ fontSize: "15px" }} />
              <p>{getPersonalDetails.location}</p>
            </div>

            <div className="flex justify-start items-center space-x-2">
              <TfiEmail style={{ fontSize: "15px" }} />
              <p>{getCredentials.email}</p>
            </div>

            <div className="flex justify-start items-center space-x-2">
              <FaMobileAlt style={{ fontSize: "15px" }} />
              <p>{getPersonalDetails.mobileno}</p>
            </div>

            <div className="flex justify-start items-center space-x-2">
              <SiSkypeforbusiness style={{ fontSize: "15px" }} />
              <p>faiq_israr</p>
            </div>
          </div>
          <div
            className="flex items-center justify-center pt-4"
            onClick={showToast}
          >
            <Button bgColor={"blue-600"} hoverColor={"blue-700"} />
            <ToastContainer position="bottom-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
