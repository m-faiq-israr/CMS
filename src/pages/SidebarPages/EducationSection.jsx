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
} from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { useAuth } from "../../Firebase/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import "../../components/ScrollBar.css";

const EducationSection = () => {
  const { user } = useAuth();

  const [inputs, setInputs] = useState([
    { institute: "", degree: "", startDate: "", endDate: "", cgpa: "" },
  ]);
  const [docId, setDocId] = useState(null);
  const { openSidebar } = useStateContext();
  const [loading, setLoading] = useState(false);
  const [timestamp, setTimestamp] = useState(null);
  const [emptyValue, setEmptyValue] = useState(true);

  const checkEmptyFields = (inputs) => {
    const allEmpty = inputs.every(
      (input) =>
        !input.institute &&
        !input.degree &&
        !input.startDate &&
        !input.endDate &&
        !input.cgpa
    );
    setEmptyValue(allEmpty);
  };

  const handleChange = (index, field, value) => {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index][field] = value;
      checkEmptyFields(updatedInputs);
      return updatedInputs;
    });
  };

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
          setTimestamp(data.timestamp);
          setDocId(doc.id);
          checkEmptyFields(data.educationData);
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
    checkEmptyFields([
      ...inputs,
      { institute: "", degree: "", startDate: "", endDate: "", cgpa: "" },
    ]);
  };

  const removeEducationField = (index) => {
    if (inputs.length > 1) {
      setInputs((prevInputs) => {
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
    const educationData = inputs.map((input) => {
      const { institute, degree, startDate, endDate, cgpa } = input;
      return { institute, degree, startDate, endDate, cgpa };
    });

    if (!user) {
      console.log("User not authenticated");
      return;
    }

    try {
      setLoading(true);
      let docIdToUpdate;

      if (docId) {
        const docRef = doc(db, "Education Details", docId);
        await updateDoc(docRef, { educationData });
        docIdToUpdate = docId;
      } else {
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
      setLoading(false);
    } catch (e) {
      setLoading(false);
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
      <div className="h-scree bg-white dark:bg-gray-700 shadow-lg dark:shadow-none shadow-gray-300 px-10 mt-5 py-10 rounded-3xl">
        <div className="md:flex items-center justify-between">
          <h1 className="xs:text-2xl text-4xl font-bold text-gray-700 dark:text-gray-100">
            EDUCATION SECTION
          </h1>
          {timestamp && (
            <p className="xs:text-sm pb-2 md:pb-0 text-gray-700 dark:text-gray-200">
              Last Updated: {new Date(timestamp).toLocaleString()}
            </p>
          )}
        </div>
        <div className="bg-indigo-700 h-2 w-16 rounded-full"></div>
        <div className="mb-4 flex justify-end">
          <AddFieldButton
            name={"Add Education"}
            onClick={addEducationField}
            disabled={loading}
          />
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
                  handleChange={handleChange}
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

export default EducationSection;
