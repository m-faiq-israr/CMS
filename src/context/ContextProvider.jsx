import { createContext, useContext, useState } from "react";

import FileDownload from "react-file-download";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {


 

  const [skillCard, setskillCard] = useState("");

  const [selectLayoutButton, setSelectLayoutButton] = useState(false);


  const downloadPDF = () => {
    const pdfPath = "../assets/FAIQ RESUME UPDATED.pdf";
    const filename = `${credentials.name} Resume.pdf`;
    FileDownload(pdfPath, filename);
  };

  const [openSidebar, setopenSidebar] = useState(true);

  const [sidebarPage, setsidebarPage] = useState(null);

  const [activeTab, setActiveTab] = useState("Home Page");

  const getCredentials = JSON.parse(localStorage.getItem("credentials"));
  
 

  const [inputs, setInputs] = useState([
    { institute: "", degree: "", startDate: "", endDate: "", cgpa: "" },
  ]);

  const handleChange = (index, field, value) => {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index][field] = value;
      return updatedInputs;
    });
  };
    const [personalDetails, setpersonalDetails] = useState({
      fname: "",
      lname: "",
      profession: "",
      location: "",
      mobileno: "",
      dob: "",
   
      aboutme: "",
    });


     const getPersonalDetails = JSON.parse(
       localStorage.getItem("personalDetails")
     );


  const storedEducationData = JSON.parse(localStorage.getItem("educationData"));

  const [experienceInput, setexperienceInput] = useState([
    {
      designation: "",
      companyName: "",
      startDate: "",
      endDate: "",
      point1: "",
      point2: "",
      point3: "",
      location: "",
    },
  ]);

  const handleExperienceChange = (index, field, value) => {
    setexperienceInput((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index][field] = value;
      return updatedInputs;
    });
  };

  const storedExperienceData = JSON.parse(
    localStorage.getItem("experienceData")
  );

  const [projectInput, setprojectInput] = useState([
    {
      projectTitle: "",
      techUsed: "",
      point1: "",
    },
  ]);

  const handleProjectChange = (index, field, value) => {
    setprojectInput((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index][field] = value;
      return updatedInputs;
    });
  };

  const storedProjectData = JSON.parse(localStorage.getItem("projectData"));

  const showToast = (title) => {
    toast.success(title, {
      autoClose: 1000,
      hideProgressBar: true,
      loading: false,
      pauseOnFocusLoss: false,

      className: "bg-green-400 text-white rounded-2xl  font-poppins font-bold ",
    });
  };

 
  return (
    <StateContext.Provider
      value={{
        skillCard,
        setskillCard,
        downloadPDF,
        selectLayoutButton,
        setSelectLayoutButton,
        openSidebar,
        setopenSidebar,
        sidebarPage,
        setsidebarPage,
        getCredentials,
        getPersonalDetails,
        handleChange,
        inputs,
        setInputs,
        storedEducationData,
        experienceInput,
        setexperienceInput,
        handleExperienceChange,
        storedExperienceData,
        projectInput,
        setprojectInput,
        handleProjectChange,
        storedProjectData,
        activeTab,
        setActiveTab,
        showToast,
        personalDetails,
        setpersonalDetails,
        
     
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
