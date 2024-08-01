import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import AddEducationBox from "../../components/SideBarComponents/AddEducationBox";
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
} from "firebase/firestore"; // Add 'doc' here
import { db } from "../../Firebase/firebase";
import { useAuth } from "../../Firebase/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import "../../components/ScrollBar.css"
const EducationSection = () => {
  const { user } = useAuth();
  const { inputs, setInputs } = useStateContext();
  const [docId, setDocId] = useState(null);
  const { openSidebar } = useStateContext();
  const [loading, setloading] = useState(false);
  const [timestamp, settimestamp] = useState(null)

  useEffect(() => {
    const fetchEducationData = async () => {
      if (user) {
        const q = query(
          collection(db, "Education Details"),
          where("id", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setInputs(data.educationData);
          settimestamp(data.timestamp);
          setDocId(doc.id);
        }
      }
    };

    fetchEducationData();
  }, [user, setInputs]);

  const addEducationField = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      { institute: "", degree: "", startDate: "", endDate: "", cgpa: "" },
    ]);
  };

  const removeEducationField = (index) => {
    if (inputs.length > 1) {
      setInputs((prevInputs) => {
        const updatedInputs = [...prevInputs];
        updatedInputs.splice(index, 1);
        return updatedInputs;
      });
    }
  };

  const notify = (msg) => toast.success(msg, { duration: 1000 });

  const notifyError = (error) => toast.error(error);

 const handleSubmit = async (e) => {
   e.preventDefault();
   const educationData = inputs.map((input) => {
     const { institute, degree, startDate, endDate, cgpa } = input;
     return {
       institute,
       degree,
       startDate,
       endDate,
       cgpa,
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
       const docRef = doc(db, "Education Details", docId);
       await updateDoc(docRef, { educationData });
       docIdToUpdate = docId;
      //  notify("Education Details Updated");
     } else {
       // Add new document
       const docRef = await addDoc(collection(db, "Education Details"), {
         id: user.uid,
         educationData,
       });
       docIdToUpdate = docRef.id;
       notify("Education Added Successfully");
       setDocId(docIdToUpdate);
     }

     if (!docIdToUpdate) {
       throw new Error("Document ID is undefined or empty");
     }

     // Call the cloud function to update the timestamp
     console.log("Calling Cloud Function with docId:", docIdToUpdate);
     const response = await fetch(
       "http://localhost:5001/cms-d4a0e/us-central1/educationSectionTimestamp",
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

     console.log("Timestamp updated successfully");
       notify("Education Details Updated");


     setloading(false);
   } catch (e) {
     setloading(false);
     console.log(e);
     notifyError(e.message);
   }
 };



  return (
    <div
      className={`py-2 font-poppins duration-300 xs:mx-6 sm:mx-6 h-scree ${
        openSidebar ? "" : "mr-36"
      }`}
    >
      <div className="h-scree bg-white dark:bg-gray-700 shadow-lg dark:shadow-none shadow-gray-300 px-10 mt-5 py-10  rounded-3xl">
        <div className="flex items-center justify-between">
          <h1 className="xs:text-2xl text-4xl font-bold text-gray-700 dark:text-gray-100">
            EDUCATION SECTION
          </h1>
          {timestamp && (
            <p className="text-gray-700 dark:text-gray-200">
              Last Updated: {new Date(timestamp).toLocaleString()}
            </p>
          )}
        </div>
        <div className="bg-indigo-700 h-2 w-16 rounded-full"></div>
        <div className="mb-4 flex justify-end">
          <AddFieldButton name={"Add Education"} onClick={addEducationField} disabled={loading} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="max-h-[62vh] overflow-y-auto scrollbar-hide">
            {inputs.map((input, index) => (
              <div key={index} className="mb-4">
                <AddEducationBox
                  value={input}
                  onClick={() => removeEducationField(index)}
                  index={index}
                  loading={loading}
                />
              </div>
            ))}
          </div>
          <div className="mt-2">
            <InputButton
              type={"submit"}
              name={docId ? "Update" : "Save"}
              loading={loading}
            />
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default EducationSection;
