import React from "react";
import { FcGoogle } from "react-icons/fc";

const AuthProviderButton = ({ name, icon, color, hoverColor, onClick }) => {
 
  return (
    <div
    onClick={onClick}
      className={`flex  items-center justify-center gap-2 py-2  font-poppins  rounded-xl cursor-pointer ${color} hover:${hoverColor} ${color === 'bg-blue-500' ? 'text-white' : 'text-gray-700 dark:bg-white dark:hover:bg-gray-100'}`}
    >
      <div>{icon}</div>
      <h1 className={`font-semibold `}>{name}</h1>
    </div>
  );
};

export default AuthProviderButton;
