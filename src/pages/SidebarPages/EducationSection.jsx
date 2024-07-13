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
          const data = doc.data().educationData;
          setInputs(data);
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
      setloading(true);
      if (docId) {
        // Update existing document
        const docRef = doc(db, "Education Details", docId);
        await updateDoc(docRef, { educationData });
        setloading(false);
        notify("Education Details Updated");
      } else {
        // Add new document
        const docRef = await addDoc(collection(db, "Education Details"), {
          id: user.uid,
          educationData,
        });
        console.log("Document written with ID: ", docRef.id);
        setloading(false);
        notify("Education Added Successfully");
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
      className={`py-2 font-poppins duration-300 xs:mx-6 sm:mx-6 h-scree ${
        openSidebar ? "" : "mr-36"
      }`}
    >
      <div className="h-scree bg-white dark:bg-gray-700 shadow-lg dark:shadow-none shadow-gray-300 px-10 mt-5 py-10  rounded-3xl">
        <h1 className="xs:text-xl text-4xl font-bold text-gray-700 dark:text-gray-100">
          EDUCATION SECTION
        </h1>
        <div className="bg-indigo-700 h-2 w-16 rounded-full"></div>
        <div className="mb-4 flex justify-end">
          <AddFieldButton name={"Add Education"} onClick={addEducationField} />
        </div>
          <form onSubmit={handleSubmit}>
        <div className="max-h-[62vh] overflow-y-auto scrollbar-hide">
            {inputs.map((input, index) => (
              <div key={index} className="mb-4">
                <AddEducationBox
                  value={input}
                  onClick={() => removeEducationField(index)}
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

export default EducationSection;
