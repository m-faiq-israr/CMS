import { createContext, useContext, useEffect, useState, useRef} from "react";
import { sendMsgToAI } from "../components/ChatBot/Gemini";
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
const [chatLoading, setChatLoading] = useState(false); // State to track chatLoading
const [message, setMessage] = useState([
  {
    text: `Hello, How can I help you today?`,
    isBot: true,
  },
]);
const msgEnd = useRef(null);

const handleSend = async () => {
  const text = chatValue.trim();
  if (!text) return; // Avoid sending empty messages

  setChatValue("");
  setChatLoading(true); // Start chatLoading
  setMessage((prevMessages) => [...prevMessages, { text, isBot: false }]);

  try {
    const res = await sendMsgToAI(text);
    setMessage((prevMessages) => [...prevMessages, { text: res, isBot: true }]);
  } catch (error) {
    setMessage((prevMessages) => [
      ...prevMessages,
      { text: "An error occurred while fetching the response.", isBot: true },
    ]);
  } finally {
    setChatLoading(false); // Stop chatLoading
  }

  msgEnd.current?.scrollIntoView({ behavior: "smooth" });
};

const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    handleSend();
  }
};

const clearChat = () => {
  setMessage([
    {
      text: `Hello, How can I help you today?`,
      isBot: true,
    },
  ]);
};

   const handleQuery = async (prompt) => {
     setChatLoading(true); // Start chatLoading
     setMessage((prevMessages) => [
       ...prevMessages,
       { text: prompt, isBot: false },
     ]);

     try {
       const res = await sendMsgToAI(prompt);
       setMessage((prevMessages) => [
         ...prevMessages,
         { text: res, isBot: true },
       ]);
     } catch (error) {
       setMessage((prevMessages) => [
         ...prevMessages,
         {
           text: "An error occurred while fetching the response.",
           isBot: true,
         },
       ]);
     } finally {
       setChatLoading(false); // Stop chatLoading
     }

     msgEnd.current?.scrollIntoView({ behavior: "smooth" });
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
        chatLoading,
        clearChat,
        handleQuery,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
