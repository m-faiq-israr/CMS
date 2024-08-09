import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { LuPanelLeftClose } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import { useStateContext } from "../../context/ContextProvider";
import userPic from "../../assets/user1.png";
import { useAuth } from "../../Firebase/AuthContext";

function LeftNav() {
  const {
    setShowSlide,
    showSlide,
    handleQuery,
    getPersonalDetailsData,
    clearChat,
    chatLoading,
  } = useStateContext();
  const { userImage } = useAuth();

  const handleNewChat = () => {
    // Option 1: Refresh the page
    // window.location.reload();

    // Option 2: Clear chat data without refreshing the page
    clearChat();
  };

  const handleQueryClick = (prompt) => {
    handleQuery(prompt);
  };

  return (
    <div
      className={
        !showSlide
          ? "h-screen  font-poppins bg-gray-100 dark:bg-gray-900  pt-4 hidden lg:flex items-center justify-between p-2 text-gray-800 dark:text-white flex-col translate-x-0 rounded-r-3xl"
          : "hidden"
      }
    >
      <div className="flex items-start justify-between gap-2 w-full">
        <span
          className="border border-gray-600  rounded w-[80%] py-2 text-xs flex gap-1 items-center justify-center cursor-pointer"
          onClick={handleNewChat}
        >
          <AiOutlinePlus fontSize={18} />
          New Chat
        </span>
        <span
          className="border border-gray-600  rounded px-3 py-[9px] flex items-center justify-center cursor-pointer"
          title="Close sidebar"
          onClick={() => setShowSlide(!showSlide)}
        >
          <LuPanelLeftClose />
        </span>
      </div>
      {/* middle section  */}
      <div className="h-[80%] w-full py-2 pl-2 pr-4 flex items-start justify-start flex-col overflow-hidden overflow-y-auto text-sm scroll my-2">
        <span
          className="rounded w-full py-3 px-2 text-xs my-2 flex gap-1 items-center justify-between cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 overflow-hidden truncate whitespace-nowrap"
          onClick={() => handleQueryClick("What is Programming?")}
        >
          <span className="flex gap-2 items-center justify-center text-base">
            <FiMessageSquare />
            <span className="text-sm">What is Programming?</span>
          </span>
          {/* {chatLoading && <FaSpinner className="animate-spin text-gray-500" />} */}
        </span>
        <span
          className="rounded w-full py-3 px-2 text-xs my-2 flex gap-2 items-center justify-between cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 overflow-hidden truncate whitespace-nowrap"
          onClick={() => handleQueryClick("How to use an API?")}
        >
          <span className="flex gap-2 items-center justify-center text-base">
            <FiMessageSquare />
            <span className="text-sm">How to use an API?</span>
          </span>
          {/* {chatLoading && <FaSpinner className="animate-spin text-gray-500" />} */}
        </span>
      </div>
      {/* bottom section  */}
      <div className="w-full border-t border-gray-600 flex flex-col gap-2 items-center justify-center p-2">
        <span className="rounded w-full py-2 pl-2 pr-4 text-xs flex gap-1 items-center justify-between cursor-pointer  transition-all duration-300">
          <span className="flex gap-2 items-center justify-center text-sm font-bold">
            <img
              src={userImage ? userImage : userPic}
              alt="user"
              className="w-8 h-8 object-cover rounded-sm"
            />
            {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
              <h1 className="font-semibold text-lg text-gray-800 dark:text-white">{`${getPersonalDetailsData[0].fname} ${getPersonalDetailsData[0].lname}`}</h1>
            ) : (
              <h1 className="font-semibold text-lg text-gray-800 dark:text-white">
                User
              </h1>
            )}
          </span>
        </span>
      </div>
    </div>
  );
}

export default LeftNav;
