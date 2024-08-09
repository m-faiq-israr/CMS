import React from "react";
import { LuPanelLeftOpen } from "react-icons/lu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiSendPlane2Fill } from "react-icons/ri";
import { FaSpinner } from "react-icons/fa"; // Import the spinner icon
import Chat from "./Chat";
import { useStateContext } from "../../context/ContextProvider";

function ChatContainer() {
  const {
    setShowSlide,
    showSlide,
    setMobile,
    Mobile,
    chatValue,
    setChatValue,
    handleSend,
    handleKeyPress,
    chatLoading, // chatLoading state to track data fetching
  } = useStateContext();

  return (
    <div
      className={`h-screen w-full  mx-6 lg:mx-0 ${
        showSlide
          ? "lg:w-screen rounded-3xl shadow-lg"
          : "lg:w-[calc(100%-300px)] lg:rounded-l-3xl shadow-lg"
      } bg-white dark:bg-gray-700  flex items-start justify-between flex-col p-2  font-poppins`}
    >
      <div
        className="rounded px-3 py-[9px] hidden lg:flex items-center justify-center cursor-pointer text-gray-800 hover:bg-gray-100 dark:text-white m-1 dark:hover:bg-gray-600 duration-200 ml-auto"
        title="Open sidebar"
        onClick={() => setShowSlide(!showSlide)}
      >
        {showSlide && <LuPanelLeftOpen />}
      </div>
      <span
        className="rounded px-3 py-[9px] lg:hidden flex items-center justify-center cursor-pointer text-gray-800 dark:text-white mt-0 mb-3 "
        title="Open sidebar"
        onClick={() => setMobile(!Mobile)}
      >
        <HiOutlineMenuAlt2 fontSize={20} />
      </span>
      {/* chat section */}
      <Chat />
      {/* chat input section */}
      <div className="w-full flex items-center justify-center flex-col gap-2 my-2">
        <span className="flex gap-2 items-center justify-center bg-gray-100 dark:bg-gray-600 rounded-lg shadow-md px-3 w-full  md:w-[70%]">
          <input
            type="text"
            placeholder="Enter a prompt here"
            className="h-full text-gray-800 dark:text-white bg-transparent px-3 py-4 w-full border-none outline-none text-base"
            value={chatValue}
            onChange={(e) => setChatValue(e.target.value)}
            onKeyUp={handleKeyPress}
            disabled={chatLoading} // Disable input when chatLoading
          />
          {chatLoading ? (
            <FaSpinner className="animate-spin mx-3 text-xl text-gray-500 dark:text-gray-400" />
          ) : (
            <RiSendPlane2Fill
              title="send message"
              className={
                chatValue.length <= 0
                  ? "text-gray-500 dark:text-gray-400 cursor-auto mx-3 text-xl"
                  : "text-white cursor-pointer mx-3 text-3xl bg-green-500 p-1 rounded shadow-md"
              }
              onClick={handleSend}
            />
          )}
        </span>
        <p className="lg:text-xs text-gray-600 dark:text-gray-400 text-center text-[10px]">
          Gemini may display inaccurate info, including about people, so
          double-check its responses.
        </p>
      </div>
    </div>
  );
}

export default ChatContainer;
