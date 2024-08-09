import React, { useEffect, useState, useRef } from "react";
import { useStateContext } from "../../context/ContextProvider";
import { useAuth } from "../../Firebase/AuthContext";
import { RiSendPlane2Fill } from "react-icons/ri";

function Chat() {
  const { message, msgEnd } = useStateContext();
  const { userImage } = useAuth();

  // Auto-scroll to the bottom when the message array changes
  useEffect(() => {
    msgEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div className="w-full h-[85%] flex items-center justify-center font-poppins overflow-hidden overflow-y-auto px-2 py-1 scroll">
      <div className="w-full lg:w-4/5 flex flex-col h-full items-start justify-start">
        {message?.map((msg, i) => (
          <span
            key={i}
            className={
              msg.isBot
                ? "flex items-start justify-center gap-2 lg:gap-5 my-2 bg-gray-100 dark:bg-gray-800/80 p-3 rounded-md w-full"
                : "flex items-start justify-center gap-2 lg:gap-5 my-2 p-3 w-full"
            }
          >
            <img
              src={msg.isBot ? "/icon.png" : userImage}
              alt="user"
              className="w-10 h-10 rounded object-cover"
            />
            <p className="text-gray-800 dark:text-white text-[15px] w-full">
              {msg?.text}
            </p>
          </span>
        ))}
        <div ref={msgEnd} />
      </div>
    </div>
  );
}

export default Chat;
