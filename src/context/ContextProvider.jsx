import { createContext, useContext, useEffect, useState, useRef} from "react";
import { sendMsgToAI } from "../components/ChatBot/OpenAi";

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


  //chatbot

   const [showSlide, setShowSlide] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const [chatValue, setChatValue] = useState("");
  const [message, setMessage] = useState([
    {
      text: "Hi, I'm ChatGPT, a powerful language model created by OpenAI. My primary function is to assist users in generating human-like text based on the prompts and questions I receive. I have been trained on a diverse range of internet text up until September 2021, so I can provide information, answer questions, engage in conversations, offer suggestions, and more on a wide array of topics. Please feel free to ask me anything or let me know how I can assist you today!",
      isBot: true,
    },
  ]);
  const msgEnd = useRef(null);

  // useEffect(() => {
  //   msgEnd.current.scrollIntoView();
  // }, [message]);

  // button Click function
  const handleSend = async () => {
    const text = chatValue;
    setChatValue("");
    setMessage([...message, { text, isBot: false }]);
    const res = await sendMsgToAI(text);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  // Enter Click function
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Query Click function
  const handleQuery = async (e) => {
    const text = e.target.innerText;
    setMessage([...message, { text, isBot: false }]);
    const res = await sendMsgToAI(text);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
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
        getPersonalDetailsData,
        getEducationData,
        getExperienceData,
        getProjectData,
        getSkills,

        activeTab,
        setActiveTab,

        loading,
        setLoading,
        showSlide,
        setShowSlide,
        Mobile,
        setMobile,
        chatValue,
        setChatValue,
        handleSend,
        message,
        msgEnd,
        handleKeyPress,
        handleQuery,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
