import React, { useState } from 'react'
import MyImage from '../../assets/myImg1.jpg'
import userPic from '../../assets/user1.png'
import { useStateContext } from '../../context/ContextProvider';
import { useAuth } from '../../Firebase/AuthContext';

const SideProfileComp = () => {
    const {openSidebar, getPersonalDetailsData} = useStateContext();

    
   
    
    const { user, userImage } = useAuth();
    
  return (
    <>
      {openSidebar ? (
        <>
          <div className="">
            <div className="flex items-center gap-3 pt- px-3 pb-3 duration-300 ">
              <div className=" rounded-full h-16 w-16  duration-300   ">
                <img
                  className="w-full h-full object-cover rounded-full "
                  src={userImage ? userImage : userPic}
                  alt="Picture not available"
                />
              </div>
              <div className=" font-poppins duration-300 ">
                {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
                  <h1 className="font-bold text-xl text-gray-800 dark:text-white">{`${getPersonalDetailsData[0].fname} ${getPersonalDetailsData[0].lname}`}</h1>
                ) : (
                  <h1 className="font-bold text-xl text-gray-800 dark:text-white">
                    User
                  </h1>
                )}
                {user ? (
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold duration-300  ">
                    {user.email}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-full overflow-hidden h-0.5 mt-4">
            {" "}
          </div>
        </>
      ) : (
        <div className="pt-28"></div>
      )}
    </>
  );
}

export default SideProfileComp
