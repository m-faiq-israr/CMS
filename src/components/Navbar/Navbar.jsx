// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import userPic from "../../assets/user1.png";
import { useAuth } from "../../Firebase/AuthContext";
import { useStateContext } from "../../context/ContextProvider";
import ThemeToggle from "../ThemeToggle";


const Navbar = () => {
    const { user, userImage } = useAuth();
    const { getPersonalDetailsData, setsidebarPage, sidebarPage } =
      useStateContext();


  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (name) => {
    setMenuOpen(false);
    setsidebarPage(name);



  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="bg-gray-50 dark:bg-gray-700 px-2 py-2 flex justify-between items-center relative font-poppins">
      <div className="flex gap-2">
        <div className=" rounded-full h-12 w-12  duration-300   ">
          <img
            className="w-full h-full object-cover rounded-full "
            src={userImage ? userImage : userPic}
            alt="Picture not available"
          />
        </div>
        <div>
          {getPersonalDetailsData && getPersonalDetailsData.length > 0 ? (
            <h1 className="font-bold text-xl text-gray-800 dark:text-white">{`${getPersonalDetailsData[0].fname} ${getPersonalDetailsData[0].lname}`}</h1>
          ) : (
            <h1 className="font-bold text-xl text-gray-800 dark:text-white">
              User
            </h1>
          )}
          {user ? (
            <p className="text-gray-600 dark:text-gray-300 xs:text-xs sm:text-sm font-semibold duration-300  ">
              {user.email}
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div
        className="text-gray-800 dark:text-white  text-lg cursor-pointer"
        onClick={toggleMenu}
      >
        <FiMenu />
      </div>
      {menuOpen && (
        <div
          ref={menuRef}
          className={`absolute text-sm right-4 top-12 select-none bg-gray-100 dark:bg-gray-600   rounded-lg shadow-lg py-2`}
        >
          <ul>
            <li
              className={`px-4 py-2  cursor-pointer ${
                sidebarPage === "Home Page"
                  ? "text-blue-500"
                  : "text-gray-800 dark:text-gray-100  hover:text-gray-500"
              }`}
              onClick={() => handleClick("Home Page")}
            >
              Home Page
            </li>
            <li
              className={`px-4 py-2  cursor-pointer ${
                sidebarPage === "Personal Details"
                  ? "text-blue-500"
                  : "text-gray-800 dark:text-gray-100  hover:text-gray-500"
              }`}
              onClick={() => handleClick("Personal Details")}
            >
              Personal Details
            </li>
            <li
              className={`px-4 py-2  cursor-pointer ${
                sidebarPage === "Skill Section"
                  ? "text-blue-500"
                  : "text-gray-800 dark:text-gray-100  hover:text-gray-500"
              }`}
              onClick={() => handleClick("Skill Section")}
            >
              Skills Section
            </li>
            <li
              className={`px-4 py-2  cursor-pointer ${
                sidebarPage === "Education Section"
                  ? "text-blue-500"
                  : "text-gray-800 dark:text-gray-100  hover:text-gray-500"
              }`}
              onClick={() => handleClick("Education Section")}
            >
              Education Section
            </li>
            <li
              className={`px-4 py-2  cursor-pointer ${
                sidebarPage === "Experience Section"
                  ? "text-blue-500"
                  : "text-gray-800 dark:text-gray-100  hover:text-gray-500"
              }`}
              onClick={() => handleClick("Experience Section")}
            >
              Experience Section
            </li>
            <li
              className={`px-4 py-2  cursor-pointer ${
                sidebarPage === "Project Section"
                  ? "text-blue-500"
                  : "text-gray-800 dark:text-gray-100  hover:text-gray-500"
              }`}
              onClick={() => handleClick("Project Section")}
            >
              Project Section
            </li>
            <div className="px-4 inline-block">
              <ThemeToggle />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
