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
  const { openSidebar, experienceInput, setexperienceInput } =
    useStateContext();
  const [docId, setDocId] = useState(null);
  const [loading, setloading] = useState(false);

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
          const data = doc.data().experienceData;
          setexperienceInput(data);
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
  };

  const removeExperienceField = (index) => {
    if (experienceInput.length > 1) {
      setexperienceInput((prevInputs) => {
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
      setloading(true);
      if (docId) {
        // Update existing document
        const docRef = doc(db, "Experience Details", docId);
        await updateDoc(docRef, { experienceData });
        setloading(false);
        notify("Experience Details Updated");
      } else {
        // Add new document
        const docRef = await addDoc(collection(db, "Experience Details"), {
          id: user.uid,
          experienceData,
        });
        console.log("Document written with ID: ", docRef.id);
        setloading(false);
        notify("Experience Added Successfully");
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
        <h1 className="xs:text-xl text-4xl font-bold text-gray-700 dark:text-gray-100">
          EXPERIENCE SECTION
        </h1>
        <div className="bg-indigo-700 h-2 w-16 rounded-full "></div>
        <div className="mb-4 flex justify-end">
          <AddFieldButton
            name={"Add Experience"}
            onClick={addExperienceField}
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

export default ExperienceSection;
