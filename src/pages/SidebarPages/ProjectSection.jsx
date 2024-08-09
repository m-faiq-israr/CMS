import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import AddFieldButton from "../../components/SideBarComponents/AddFieldButton";
import AddProjectBox from "../../components/SideBarComponents/AddProjectBox";
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

const ProjectSection = () => {
  const { user } = useAuth();
  const { openSidebar } = useStateContext();
  const [docId, setDocId] = useState(null);
  const [loading, setloading] = useState(false);
  const [timestamp, settimestamp] = useState(null);
  const [emptyValue, setEmptyValue] = useState(true);
  const [projectInput, setprojectInput] = useState([
    {
      projectTitle: "",
      techUsed: "",
      point1: "",
    },
  ]);

  const checkEmptyFields = (inputs) => {
    const allEmpty = inputs.every(
      (input) => !input.projectTitle && !input.techUsed && !input.point1
    );
    setEmptyValue(allEmpty);
  };

  const handleProjectChange = (index, field, value) => {
    setprojectInput((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index][field] = value;
      checkEmptyFields(updatedInputs);
      return updatedInputs;
    });
  };

  useEffect(() => {
    const fetchProjectData = async () => {
      if (user) {
        const q = query(
          collection(db, "Project Details"),
          where("id", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setprojectInput(data.projectData);
          settimestamp(data.timestamp);
          checkEmptyFields(data.projectData);
          setDocId(doc.id);
        }
      }
    };

    fetchProjectData();
  }, [user, setprojectInput]);

  const addProjectField = () => {
    setprojectInput((prevInputs) => [
      ...prevInputs,
      { projectTitle: "", techUsed: "", point1: "" },
    ]);
    checkEmptyFields([
      ...inputs,
      { projectTitle: "", techUsed: "", point1: "" },
    ]);
  };

  const removeProjectField = (index) => {
    if (projectInput.length > 1) {
      setprojectInput((prevInputs) => {
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
    const projectData = projectInput.map((input) => {
      const { projectTitle, techUsed, point1 } = input;
      return { projectTitle, techUsed, point1 };
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
        const docRef = doc(db, "Project Details", docId);
        await updateDoc(docRef, { projectData });
        docIdToUpdate = docId;
        // notify("Project Details Updated");
      } else {
        // Add new document
        const docRef = await addDoc(collection(db, "Project Details"), {
          id: user.uid,
          projectData,
        });
        docIdToUpdate = docRef.id;
        console.log("Document written with id: ", docRef.id);
        notify("Project Details Added");
        setDocId(docIdToUpdate);
      }

      if (!docIdToUpdate) {
        throw new Error("Document ID is undefined or empty");
      }

      // Call the cloud function to update the timestamp
      console.log("Calling Cloud Function with docId:", docIdToUpdate);
      const response = await fetch(
        "http://localhost:5001/cms-d4a0e/us-central1/projectSectionTimestamp",
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

      console.log("Project timestamp updated successfully");
      notify("Project Details Updated");

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
      <div className="bg-white dark:bg-gray-700 dark:shadow-none shadow-lg  px-10 mt-5 py-10 rounded-3xl min-h-[70vh">
        <div className="md:flex items-center justify-between">
          <h1 className="xs:text-2xl text-4xl font-bold text-gray-700 dark:text-gray-100">
            PROJECT SECTION
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
            name={"Add Project"}
            onClick={addProjectField}
            disabled={loading}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="max-h-[70vh] overflow-y-auto scrollbar-hide">
            {projectInput.map((input, index) => (
              <div key={index} className="mb-4">
                <AddProjectBox
                  value={input}
                  index={index}
                  removeField={() => removeProjectField(index)}
                  loading={loading}
                  handleProjectChange={handleProjectChange}
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

export default ProjectSection;
