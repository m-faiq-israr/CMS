import React, { useState } from "react";
import InputDetails from "../../components/SideBarComponents/InputDetails";
import InputButton from "../../components/SideBarComponents/InputButton";
import TextArea from "../../components/SideBarComponents/TextArea";
import { useStateContext } from "../../context/ContextProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const PersonalDetails = () => {
  const { openSidebar, showToast, personalDetails, setpersonalDetails } =
    useStateContext();
  
  const onChange = (e) =>{
    setpersonalDetails({...personalDetails, [e.target.name]:e.target.value});
  }

    const [profilePicture, setProfilePicture] = useState(null);

    // Function to handle file input change
    const handleFileChange = (event) => {
      const file = event.target.files[0]; // Get the first file from the input
      setProfilePicture(file); // Set the file in state
    };


  const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem('personalDetails', JSON.stringify(personalDetails));
    setpersonalDetails({
      fname: "",
      lname: "",
      profession: "",
      location: "",
      mobileno: "",
      dob: "",
      aboutme: "",
    });
    localStorage.setItem("profilePicture", JSON.stringify(profilePicture));
    showToast('Details Successfully Added');

    
  }
  return (
    <div
      className={`  pb-10 font-poppins duration-300 w-[60rem] ${
        openSidebar ? "" : "mr-36"
      } `}
    >
      <div className="bg-white shadow-lg shadow-gray-300 dark:shadow-none px-10 py-10 mt-6 rounded-3xl dark:bg-gray-700 ">
        <form className={`  `} onSubmit={handleSubmit}>
          <h1 className=" text-4xl font-bold text-gray-700 dark:text-gray-100">
            PERSONAL DETAILS
          </h1>
          <div className="bg-indigo-700 h-2 w-16 rounded-full mb-8"></div>
          <div>
            <div className="flex gap-10 justify-between">
              <div className="w-[29rem]">
                <InputDetails
                  heading={"First Name"}
                  htmlFor={"fname"}
                  name={"fname"}
                  type={"text"}
                  value={personalDetails.fname}
                  placeholder={"Enter First Name"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
              <div className="w-[29rem]">
                <InputDetails
                  heading={"Last Name"}
                  htmlFor={"lname"}
                  name={"lname"}
                  type={"text"}
                  value={personalDetails.lname}
                  placeholder={"Enter Last Name"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="mt-4 flex gap-10">
              <div className="w-[29rem]">
                <InputDetails
                  heading={"Profession"}
                  htmlFor={"profession"}
                  name={"profession"}
                  type={"text"}
                  value={personalDetails.profession}
                  placeholder={"eg. Software Engineer"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
              <div className="w-[29rem]">
                <InputDetails
                  heading={"Location"}
                  htmlFor={"location"}
                  name={"location"}
                  type={"text"}
                  value={personalDetails.location}
                  placeholder={"eg. Karachi, Pakistan"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="mt-4 flex gap-10 ">
              <div className="w-[29rem]">
                <InputDetails
                  heading={"Mobile No"}
                  htmlFor={"mobileno"}
                  name={"mobileno"}
                  value={personalDetails.mobileno}
                  type={"text"}
                  placeholder={"+92-3409322323"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
              <div className="w-[29rem]">
                <InputDetails
                  heading={"Date of Birth"}
                  htmlFor={"dob"}
                  name={"dob"}
                  value={personalDetails.dob}
                  type={"date"}
                  placeholder={"+92-3409322323"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
            </div>
            {/* <div className="mt-4  space-y-4">
              <InputDetails
                heading={"Github Account"}
                htmlFor={"github"}
                name={"github"}
                value={personalDetails.github}
                type={"text"}
                placeholder={"Enter your Github Account Link"}
                width={"full"}
                onChange={onChange}
              />
              <InputDetails
                heading={"LinkedIn Account"}
                htmlFor={"linkedin"}
                name={"linkedin"}
                value={personalDetails.linkedin}
                type={"text"}
                placeholder={"Enter your LinkedIn Account Link"}
                width={"full"}
                onChange={onChange}
              />
            </div> */}
            <div className="mt-4  flex flex-col ">
              <label
                className="font-semibold text-lg ml-2 text-gray-600 dark:text-gray-200"
                htmlFor="aboutme"
              >
                About Me
              </label>
              <TextArea
                name={"aboutme"}
                id={"aboutme"}
                onChange={onChange}
                value={personalDetails.aboutme}
                rows={4}
                placeholder="Write brief introduction about yourself"
              />
            </div>
            <div className="mt-4 font-poppins flex flex-col">
              <label className="font-semibold text-lg ml-2 text-gray-600 dark:text-gray-200" htmlFor="profilePicture">
                Upload Picture
              </label>
              <input
                className="bg-gray-100 cursor-pointer"
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
                onChange={handleFileChange}
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div className="mt-4">
              <InputButton name={"Save"} />
            </div>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default PersonalDetails;
