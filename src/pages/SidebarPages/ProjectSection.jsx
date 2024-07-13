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
  const { openSidebar, projectInput, setprojectInput } = useStateContext();
  const [docId, setDocId] = useState(null);
  const [loading, setloading] = useState(false);

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
          const data = doc.data().projectData;
          setprojectInput(data);
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
  };

  const removeProjectField = (index) => {
    if (projectInput.length > 1) {
      setprojectInput((prevInputs) => {
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
    const projectData = projectInput.map((input) => {
      const { projectTitle, techUsed, point1 } = input;
      return { projectTitle, techUsed, point1 };
    });

    if (!user) {
      console.log("User not authenticated");
      return;
    }

    try {
      setloading(true);
      if (docId) {
        // Update existing document
        const docRef = doc(db, "Project Details", docId);
        await updateDoc(docRef, { projectData });
        setloading(false);
        notify("Project Details Updated");
      } else {
        // Add new document
        const docRef = await addDoc(collection(db, "Project Details"), {
          id: user.uid,
          projectData,
        });
        console.log("Document written with id: ", docRef.id);
        setloading(false);
        notify("Project Details Added");
        setDocId(docRef.id);
      }
    } catch (e) {
      setloading(false);
      console.log(e);
      notifyError(e.message);
    }
  };

  return (
    <div
      className={`h-scree py-2 font-poppins duration-300 xs:mx-6 sm:mx-6 ${
        openSidebar ? "" : "mr-36"
      }`}
    >
      <div className="bg-white dark:bg-gray-700 dark:shadow-none shadow-lg shadow-gray-300 px-10 mt-5 py-10 rounded-3xl">
        <h1 className="xs:text-2xl text-4xl font-bold text-gray-700 dark:text-gray-100">
          PROJECT SECTION
        </h1>
        <div className="bg-indigo-700 h-2 w-16 rounded-full "></div>
        <div className="mb-4 flex justify-end">
          <AddFieldButton name={"Add Project"} onClick={addProjectField} />
        </div>
          <form onSubmit={handleSubmit}>
        <div className="max-h-[70vh] overflow-y-auto scrollbar-hide">
            {projectInput.map((input, index) => (
              <div key={index} className="mb-4">
                <AddProjectBox
                  value={input}
                  index={index}
                  removeField={() => removeProjectField(index)}
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

export default ProjectSection;
