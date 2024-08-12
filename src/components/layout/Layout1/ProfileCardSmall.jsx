import React from 'react'
// import userPic from "../../../assets/user1.png";
import { useAuth } from '../../../Firebase/AuthContext';
import { useStateContext } from '../../../context/ContextProvider';
import { IoCalendarOutline } from 'react-icons/io5';
import { GoLocation } from 'react-icons/go';
import { TfiEmail } from 'react-icons/tfi';
import { FaMobileAlt } from 'react-icons/fa';

const ProfileCardSmall = () => {
  const { user, userImage } = useAuth();
    const {
      getPersonalDetailsData,
    } = useStateContext();

  return (
    <div className="">
      {/* profile pic and name , profession */}
      <div className="flex items-center gap-4 bg-gray-700 px-4 md:px-10 py-4 ">
        {/* div for the image */}
        <div className="w-28 h-28 md:w-36 md:h-36">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={userImage ? userImage : "/user1.png"}
            alt="Picture not available"
          />
        </div>

        {/* div for name and profession */}
        <div>
          {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
            <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold text-gray-700 dark:text-white pb-2 text-center">
              {`${getPersonalDetailsData[0].fname} ${getPersonalDetailsData[0].lname}`}
            </h1>
          ) : (
            <h1>User</h1>
          )}
          {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
            <div className="flex items-center justify-center bg-gray-200  py-1 px-4 text-center rounded-full text-sm text-gray-500 dark:text-gray-900 ">
              <h3>{getPersonalDetailsData[0].profession}</h3>
            </div>
          ) : (
            <h3></h3>
          )}
        </div>
      </div>

      {/* other details */}
      <div>
        <div
          className=" pt-4 px-4 md:px-10 text-gray-500 dark:text-gray-300 text-sm
        md:text-lg flex items-center justify-between   "
        >
          <div className="space-y-2">
            <div className="flex justify-start items-center space-x-2">
              {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
                <>
                  <IoCalendarOutline />
                  <p>{getPersonalDetailsData[0].dob}</p>
                </>
              ) : (
                <p></p>
              )}
            </div>

            <div className="flex justify-start items-center space-x-2">
              {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
                <>
                  <GoLocation style={{ fontSize: "15px" }} />
                  <p>{getPersonalDetailsData[0].location}</p>
                </>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-start items-center space-x-2">
              <TfiEmail style={{ fontSize: "15px" }} />
              {user ? <p>{user.email}</p> : <p></p>}
            </div>

            <div className="flex justify-start items-center space-x-2">
              {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
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
    </div>
  );
}

export default ProfileCardSmall
