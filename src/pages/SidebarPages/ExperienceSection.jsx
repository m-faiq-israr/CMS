import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import AddExperienceBox from "../../components/SideBarComponents/AddExperienceBox";
import AddFieldButton from "../../components/SideBarComponents/AddFieldButton";
import InputButton from "../../components/SideBarComponents/InputButton";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { useAuth } from "../../Firebase/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const ExperienceSection = () => {
  const { user } = useAuth();
  const [emptyValue, setEmptyValue] = useState(true);
  const { openSidebar } =
    useStateContext();
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
  const [docId, setDocId] = useState(null);
  const [loading, setloading] = useState(false);
  const [timestamp, setTimestamp] = useState(null);

   const checkEmptyFields = (inputs) => {
     const allEmpty = inputs.every(
       (input) =>
         !input.designation &&
         !input.companyName &&
         !input.startDate &&
         !input.endDate &&
         !input.point1 &&
         !input.point2 &&
         !input.point3
     );
     setEmptyValue(allEmpty);
   };


 const handleExperienceChange = (index, field, value) => {
   setexperienceInput((prevInputs) => {
     const updatedInputs = [...prevInputs];
     updatedInputs[index][field] = value;
      checkEmptyFields(updatedInputs);

     return updatedInputs;
   });
 };

  useEffect(() => {
    const fetchExperienceData = async () => {
      if (user) {
        const q = query(
          collection(db, "Experience Details"),
          where("id", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setexperienceInput(data.experienceData);
          setTimestamp(data.timestamp);
          checkEmptyFields(data.experienceData);
          setDocId(doc.id);

        }
      }
    };

    fetchExperienceData();
  }, [user, setexperienceInput]);

  const addExperienceField = () => {
    setexperienceInput((prevInput) => [
      ...prevInput,
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
     checkEmptyFields([
       ...inputs,
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
  };

  const removeExperienceField = (index) => {
    if (experienceInput.length > 1) {
      setexperienceInput((prevInputs) => {
        const updatedInputs = [...prevInputs];
        updatedInputs.splice(index, 1);
        checkEmptyFields(updatedInputs);
        return updatedInputs;
      });
    }
  };

  const notify = (msg) => toast.success(msg, { duration: 1000 });

  const notifyError = (error) => toast.error(error);

 const handleSubmit = async (e) => {
   e.preventDefault();
   const experienceData = experienceInput.map((input) => {
     const {
       designation,
       companyName,
       startDate,
       endDate,
       point1,
       point2,
       point3,
       location,
     } = input;
     return {
       designation,
       companyName,
       startDate,
       endDate,
       point1,
       point2,
       point3,
       location,
     };
   });

   if (!user) {
     console.log("User not authenticated");
     return;
   }

   try {
     setloading(true); // Use camelCase for setLoading
     let docIdToUpdate;

     if (docId) {
       // Update existing document
       const docRef = doc(db, "Experience Details", docId);
       await updateDoc(docRef, { experienceData });
       docIdToUpdate = docId;
      //  notify("Experience Details Updated");
     } else {
       // Add new document
       const docRef = await addDoc(collection(db, "Experience Details"), {
         id: user.uid,
         experienceData,
       });
       docIdToUpdate = docRef.id;
       notify("Experience Added Successfully");
       setDocId(docIdToUpdate);
     }

     if (!docIdToUpdate) {
       throw new Error("Document ID is undefined or empty");
     }

     // Call the cloud function to update the timestamp
     console.log("Calling Cloud Function with docId:", docIdToUpdate);
     const response = await fetch(
       "http://localhost:5001/cms-d4a0e/us-central1/experienceSectionTimestamp",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${await user.getIdToken()}`,
         },
         body: JSON.stringify({ docId: docIdToUpdate }),
       }
     );

     if (!response.ok) {
       const errorText = await response.text();
       console.error("Failed to update timestamp:", errorText);
       throw new Error("Failed to update timestamp: " + errorText);
     }

     console.log("Experience Timestamp updated successfully");
       notify("Experience Details Updated");


     setloading(false);
   } catch (e) {
     setloading(false);
     console.log(e);
     notifyError(e.message);
   }
 };



  return (
    <div
      className={`min-h-screen h-full py-2 font-poppins duration-300 xs:mx-6 sm:mx-6 ${
        openSidebar ? "" : "mr-36"
      }`}
    >
      <div className="bg-white dark:bg-gray-700 dark:shadow-none shadow-lg  px-10 mt-5 py-10 rounded-3xl">
        <div className="md:flex items-center justify-between">
          <h1 className="xs:text-2xl text-4xl font-bold text-gray-700 dark:text-gray-100">
            EXPERIENCE SECTION
          </h1>
          {timestamp && (
            <p className="text-xs md:text-base pb-2 md:pb-0 text-gray-700 dark:text-gray-200">
              Last Updated: {new Date(timestamp).toLocaleString()}
            </p>
          )}
        </div>
        <div className="bg-indigo-700 h-2 w-16 rounded-full "></div>
        <div className="mb-4 flex justify-end">
          <AddFieldButton
            name={"Add Experience"}
            onClick={addExperienceField}
            disabled={loading}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="max-h-[130vh] overflow-y-auto scrollbar-hide">
            {experienceInput.map((input, index) => (
              <div key={index} className="mb-4">
                <AddExperienceBox
                  handleRemove={() => removeExperienceField(index)}
                  value={input}
                  index={index}
                  loading={loading}
                  handleExperienceChange={handleExperienceChange}
                />
              </div>
            ))}
          </div>
          <div className="mt-2">
            <InputButton
              type={"submit"}
              name={docId ? "Update" : "Save"}
              loading={loading}
              emptyValue={emptyValue}
            />
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default ExperienceSection;
