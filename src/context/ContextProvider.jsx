import { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "../Firebase/AuthContext";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../Firebase/firebase";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  
  //getting logged in user id
  const { user } = useAuth();
  let userId = "";
  if (user) {
    userId = user.uid;
  }

  const [loading, setLoading] = useState(false);

  //fetching the data from firebase
  const [getPersonalDetailsData, setgetPersonalDetailsData] = useState();
  const [getEducationData, setgetEducationData] = useState();
  const [getExperienceData, setgetExperienceData] = useState();
  const [getProjectData, setgetProjectData] = useState();
  const [getSkills, setgetSkills] = useState();

 useEffect(() => {
   // Fetching personal details of user from Firestore
   const getPersonalDetailsById = () => {
     try {
       const q = query(
         collection(db, "Personal Details"),
         where("id", "==", userId)
       );

       const unsubscribe = onSnapshot(q, (querySnapshot) => {
         if (querySnapshot.empty) {
           console.log("No matching documents.");
           setgetPersonalDetailsData([]);
           return;
         }
         const details = [];

         querySnapshot.forEach((doc) => {
           console.log("Document data:", doc.data());
           details.push(doc.data());
         });

         setgetPersonalDetailsData(details);
       });

       return unsubscribe;
     } catch (error) {
       console.error("Error getting documents: ", error);
     }
   };

   

   // Fetching the education data of user from Firestore
   const getEducationDataById = () => {
     try {
       const q = query(
         collection(db, "Education Details"),
         where("id", "==", userId)
       );

       const unsubscribe = onSnapshot(q, (querySnapshot) => {
         if (querySnapshot.empty) {
           console.log("No matching documents.");
           setgetEducationData([]); 
           return;
         }
         const details = [];

         querySnapshot.forEach((doc) => {
           console.log("Document data:", doc.data());
           details.push(...doc.data().educationData); 
         });

         setgetEducationData(details);
       });

       return unsubscribe;
     } catch (error) {
       console.error("Error getting documents: ", error);
     }
   };

   // Fetching the experience data from Firestore
   const getExperienceDatabyId = () => {
     try {
       const q = query(
         collection(db, "Experience Details"),
         where("id", "==", userId)
       );

       const unsubscribe = onSnapshot(q, (querySnapshot) => {
         if (querySnapshot.empty) {
           console.log("No matching documents.");
           setgetExperienceData([]);
           return;
         }

         const doc = querySnapshot.docs[0];
         const experienceData = doc.data().experienceData;

         setgetExperienceData(experienceData);
       });

       return unsubscribe;
     } catch (error) {
       console.error("Error getting documents: ", error);
     }
   };

   // Fetching the project data from Firestore
   const getProjectDatabyId = () => {
     try {
       const q = query(
         collection(db, "Project Details"),
         where("id", "==", userId)
       );

       const unsubscribe = onSnapshot(q, (querySnapshot) => {
         if (querySnapshot.empty) {
           console.log("No matching documents.");
           setgetProjectData([]);
           return;
         }

         const doc = querySnapshot.docs[0];
         const projectData = doc.data().projectData;

         setgetProjectData(projectData);
       });

       return unsubscribe;
     } catch (error) {
       console.error("Error getting documents: ", error);
     }
   };

   // Fetching the skills of user from Firestore
   const getSkillsbyId = () => {
     try {
       const q = query(collection(db, "Skills"), where("id", "==", userId));

       const unsubscribe = onSnapshot(q, (querySnapshot) => {
         if (querySnapshot.empty) {
           console.log("No matching documents.");
           setgetSkills([]);
           return;
         }
         const details = [];

         querySnapshot.forEach((doc) => {
           console.log("Document data:", doc.data());
           details.push(...doc.data().skills); // Assuming skills is an array of strings
         });

         setgetSkills(details);
       });

       return unsubscribe;
     } catch (error) {
       console.error("Error getting documents: ", error);
     }
   };

   // Set up listeners
   const unsubscribePersonalDetails = getPersonalDetailsById();
   const unsubscribeEducationData = getEducationDataById();
   const unsubscribeExperienceData = getExperienceDatabyId();
   const unsubscribeProjectData = getProjectDatabyId();
   const unsubscribeSkills = getSkillsbyId();

   // Clean up listeners on component unmount
   return () => {
     if (unsubscribePersonalDetails) unsubscribePersonalDetails();
     if (unsubscribeEducationData) unsubscribeEducationData();
     if (unsubscribeExperienceData) unsubscribeExperienceData();
     if (unsubscribeProjectData) unsubscribeProjectData();
     if (unsubscribeSkills) unsubscribeSkills();
   };
 }, [userId, db]);

  

  const [skillCard, setskillCard] = useState("");

  const [selectLayoutButton, setSelectLayoutButton] = useState(false);


  const [openSidebar, setopenSidebar] = useState(true);

  const [sidebarPage, setsidebarPage] = useState(null);

  const [activeTab, setActiveTab] = useState("Home Page");



  //Holds education data
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

 

  //Holds Experience data
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

 

  //Holds Project data
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

  

 

  return (
    <StateContext.Provider
      value={{
        skillCard,
        setskillCard,
        selectLayoutButton,
        setSelectLayoutButton,
        openSidebar,
        setopenSidebar,
        sidebarPage,
        setsidebarPage,
        handleChange,
        getPersonalDetailsData,
        getEducationData,
        getExperienceData,
        getProjectData,
        getSkills,
        experienceInput,
        setexperienceInput,
        handleExperienceChange,
        projectInput,
        setprojectInput,
        handleProjectChange,
        activeTab,
        setActiveTab,
        inputs,
        setInputs,
        loading,
        setLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
