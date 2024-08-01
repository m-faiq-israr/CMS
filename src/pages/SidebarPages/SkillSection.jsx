import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import InputButton from "../../components/SideBarComponents/InputButton";
import InputField from "../../components/InputField";
import AddFieldButton from "../../components/SideBarComponents/AddFieldButton";
import RemoveFieldButton from "../../components/SideBarComponents/RemoveFieldButton";
import { TiMinus } from "react-icons/ti";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  getDoc
} from "firebase/firestore"; // Add 'doc' here
import { db } from "../../Firebase/firebase";
import { useAuth } from "../../Firebase/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const SkillSection = () => {
  const { openSidebar } = useStateContext();
  const [skills, setSkills] = useState([""]);
  const { user } = useAuth();
  const [docId, setDocId] = useState(null);
  const [loading, setloading] = useState(false)
  const [timestamp, setTimestamp] = useState(null);


  useEffect(() => {
    const fetchSkillsData = async () => {
      if (user) {
        const q = query(collection(db, "Skills"), where("id", "==", user.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setSkills(data.skills);
          setTimestamp(data.timestamp);
          setDocId(doc.id);
        }
      }
    };

    fetchSkillsData();
   
  }, [user]);

   

  // Function to handle changes in input fields
  const handleChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const addInputField = () => {
    setSkills((prevInputs) => [...prevInputs, ""]);
  };

  const removeInputField = (index) => {
    if (skills.length > 1) {
      setSkills((prevInputs) => prevInputs.filter((_, i) => i !== index));
    }
  };

  const notify = (msg) => toast.success(msg, { duration: 1000 });

  const notifyError = (error) => toast.error(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      setloading(true); // Use camelCase for setLoading
      let docIdToUpdate;

      if (docId) {
        // Update existing document
        const docRef = doc(db, "Skills", docId);
        await updateDoc(docRef, { skills });
        docIdToUpdate = docId;
        // notify("Skills Updated Successfully");
      } else {
        // Add new document
        const docRef = await addDoc(collection(db, "Skills"), {
          id: user.uid,
          skills,
        });
        docIdToUpdate = docRef.id;
        notify("Skills Added Successfully");
        setDocId(docIdToUpdate);
      }

      if (!docIdToUpdate) {
        throw new Error("Document ID is undefined or empty");
      }

      // Call the cloud function to update the timestamp
      console.log("Calling Cloud Function with docId:", docIdToUpdate);
      const response = await fetch(
        "http://localhost:5001/cms-d4a0e/us-central1/skillSectionTimestamp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await user.getIdToken()}`,
          },
          body: JSON.stringify({ docId: docIdToUpdate }), // Pass the correct docId here
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to update timestamp:", errorText);
        throw new Error("Failed to update timestamp: " + errorText);
      }

      console.log("Timestamp updated successfully");
        notify("Skills Updated Successfully");

      

      setloading(false);
    } catch (e) {
      setloading(false);
      console.error("Error adding/updating document: ", e);
      notifyError(e.message);
    }
  };



  return (
    <div
      className={`pt-2 font-poppins duration-300 h-screen xs:mx-6 sm:mx-6 ${
        openSidebar ? "" : "mr-36"
      }`}
    >
      <div className="bg-white dark:bg-gray-700 dark:shadow-none shadow-lg shadow-gray-300 px-10 mt-5 py-10 rounded-3xl">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <h1 className="xs:text-2xl text-4xl font-bold text-gray-700 dark:text-gray-100">
              SKILLS SECTION
            </h1>
            {timestamp && (
              <p className="text-gray-700 dark:text-gray-200">
                Last Updated: {new Date(timestamp).toLocaleString()}
              </p>
            )}
          </div>
          <div className="bg-indigo-700 h-2 w-16 rounded-full mb-8"></div>

          <div className="my-4 flex justify-end">
            <AddFieldButton name={"Add Skills"} onClick={addInputField} disabled={loading} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mb-10 ">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-full">
                  <InputField
                    type={"text"}
                    value={skill}
                    width={"full"}
                    placeholder={`Enter Skill ${index + 1}`}
                    onChange={(e) => handleChange(index, e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div
                  className={`bg-red-500 ${
                    loading ? "" : "hover:bg-red-600"
                  }   rounded-full px-1 py-1 flex items-center justify-center`}
                >
                  <button
                    onClick={() => removeInputField(index)}
                    disabled={loading}
                    className="text-white disabled:cursor-not-allowed "
                  >
                    <TiMinus />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <InputButton
            type={"submit"}
            name={docId ? "Update" : "Save"}
            loading={loading}
          />
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default SkillSection;
