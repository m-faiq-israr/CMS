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
import { Toaster, toast } from "react-hot-toast";

const EducationSection = () => {
  const { user } = useAuth();
  const { inputs, setInputs } = useStateContext();
  const [docId, setDocId] = useState(null);
  const { openSidebar } = useStateContext();

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
      if (docId) {
        // Update existing document
        const docRef = doc(db, "Education Details", docId);
        await updateDoc(docRef, { educationData });
        toast.success("Education Details Updated");
      } else {
        // Add new document
        const docRef = await addDoc(collection(db, "Education Details"), {
          id: user.uid,
          educationData,
        });
        console.log("Document written with ID: ", docRef.id);
        toast.success("Education Added Successfully");
        setDocId(docRef.id);
      }
    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }

    // localStorage.setItem("educationData", JSON.stringify(educationData));
    // setInputs([
    //   { institute: "", degree: "", startDate: "", endDate: "", cgpa: "" },
    // ]);
  };

  return (
    <div
      className={`pb-10 font-poppins duration-300 w-[60rem] ${
        openSidebar ? "" : "mr-36"
      }`}
    >
      <div className="bg-white dark:bg-gray-700 shadow-lg dark:shadow-none shadow-gray-300 px-10 mt-5 py-10 rounded-3xl">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-100">
          EDUCATION SECTION
        </h1>
        <div className="bg-indigo-700 h-2 w-16 rounded-full mb-8"></div>
        <div className="mb-4 flex justify-end">
          <AddFieldButton name={"Add Education"} onClick={addEducationField} />
        </div>
        <form onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <div key={index} className="mb-4">
              <AddEducationBox
                value={input}
                onClick={() => removeEducationField(index)}
                index={index}
              />
            </div>
          ))}
          <InputButton type={"submit"} name={docId ? "Update" : "Save"} />
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default EducationSection;
