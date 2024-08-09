import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUser, FiMessageSquare } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useStateContext } from "../../context/ContextProvider";
import { useAuth } from "../../Firebase/AuthContext";
import userPic from "../../assets/user1.png";

function Mobile() {
  const { Mobile, setMobile, handleQuery, getPersonalDetailsData, clearChat } =
    useStateContext();

  const { userImage } = useAuth();

  const handleNewChat = () => {
    setMobile(!Mobile)
    clearChat(); // Clear chat data without refreshing the page
  };

  const handleQueryClick = (prompt) => {
    setMobile(!Mobile)
    handleQuery(prompt);
  };

  return (
    <div className="absolute  font-poppins left-0 top-0 w-full z-50 bg-black/20  dark:bg-black/40  flex justify-between items-start">
      <div
        className={
          Mobile
            ? "h-screen bg-gray-200 dark:bg-gray-900   flex items-center justify-between p-2 text-gray-800 dark:text-white flex-col translate-x-0"
            : "hidden"
        }
      >
        <div className="flex items-start justify-between w-full">
          <span
            className="border border-gray-600  rounded w-full py-2 text-xs flex gap-1 items-center justify-center cursor-pointer"
            onClick={handleNewChat}
          >
            <AiOutlinePlus fontSize={18} />
            New Chat
          </span>
        </div>
        {/* middle section  */}
        <div className="h-[80%] w-full p-2 flex items-start justify-start flex-col overflow-hidden overflow-y-auto text-sm scroll my-2">
          <span
            className="rounded w-full py-3 px-2 text-xs my-2 flex gap-1 items-center justify-between cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 transition-all duration-300 overflow-hidden truncate whitespace-nowrap"
            onClick={() => handleQueryClick("What is Programming?")}
          >
            <span className="flex gap-2 items-center justify-center text-base">
              <FiMessageSquare />
              <span className="text-sm">What is Programming?</span>
            </span>
          </span>
          <span
            className="rounded w-full py-3 px-2 text-xs my-2 flex gap-2 items-center justify-between cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 transition-all duration-300 overflow-hidden truncate whitespace-nowrap"
            onClick={() => handleQueryClick("How to use an API?")}
          >
            <span className="flex gap-2 items-center justify-center text-base">
              <FiMessageSquare />
              <span className="text-sm">How to use an API?</span>
            </span>
          </span>
        </div>
        {/* bottom section  */}
        <div className="w-full border-t border-gray-600 flex flex-col gap-2 items-center justify-center p-2">
          <span className="rounded w-full py-2 px-2 text-xs flex gap-1 items-center justify-between cursor-pointer transition-all duration-300">
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
      {Mobile && (
        <span
          className="border border-gray-600 text-white m-2 rounded px-3 py-[9px] flex items-center justify-center cursor-pointer"
          title="Close sidebar"
          onClick={() => setMobile(!Mobile)}
        >
          <MdClose />
        </span>
      )}
    </div>
  );
}

export default Mobile;
