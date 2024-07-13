import React, { useEffect, useState } from "react";
import InputDetails from "../../components/SideBarComponents/InputDetails";
import InputButton from "../../components/SideBarComponents/InputButton";
import TextArea from "../../components/SideBarComponents/TextArea";
import { useStateContext } from "../../context/ContextProvider";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db, storage } from "../../Firebase/firebase";
import { useAuth } from "../../Firebase/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { MdDelete } from "react-icons/md";

const PersonalDetails = () => {
  const { user } = useAuth();
  const { openSidebar } = useStateContext();
  const [docId, setDocId] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setloading] = useState(false);

  const [personalDetails, setPersonalDetails] = useState({
    fname: "",
    lname: "",
    profession: "",
    location: "",
    mobileno: "",
    dob: "",
    aboutme: "",
  });

  useEffect(() => {
    const fetchPersonalDetails = () => {
      if (user) {
        const q = query(
          collection(db, "Personal Details"),
          where("id", "==", user.uid)
        );

        // Listen for real-time updates with onSnapshot
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            const data = doc.data();
            setPersonalDetails({
              fname: data.fname,
              lname: data.lname,
              profession: data.profession,
              location: data.location,
              mobileno: data.mobileno,
              dob: data.dob,
              aboutme: data.aboutme,
            });
            setDocId(doc.id);
            if (data.profilePicture) {
              setImageUrl(data.profilePicture);
            }
          } else {
            // Handle case where no data is found
            console.log("No personal details found");
          }
        });

        // Return the unsubscribe function to ensure we clean up the listener
        return () => unsubscribe();
      }
    };

    // Call the function to set up the listener
    return fetchPersonalDetails();
  }, [user]);


  const onChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const uploadImage = async (file) => {
    if (!user || !file) return null;
    const imageRef = ref(storage, `images/${user.uid}`);
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);
    return url;
  };

  const notify = (msg) => toast.success(msg, { duration: 1000 });

   const notifyError = (error) => toast.error(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    let newImageUrl = imageUrl;
    if (profilePicture) {
      newImageUrl = await uploadImage(profilePicture);
    }

    try {
      setloading(true)
      if (docId) {
        // Update existing document
        const docRef = doc(db, "Personal Details", docId);
        await updateDoc(docRef, {
          ...personalDetails,
          profilePicture: newImageUrl,
        });
        setloading(false)
        notify("Personal Details Updated");
      } else {
        // Add new document
        const docRef = await addDoc(collection(db, "Personal Details"), {
          id: user.uid,
          ...personalDetails,
          profilePicture: newImageUrl,
        });
        console.log("Document written with ID: ", docRef.id);
        setloading(false)
        notify("Personal Details Added");
        setDocId(docRef.id);
      }
    } catch (e) {
        setloading(false);

      console.error("Error adding document: ", e);
      notifyError(e.message);

    }
  };

  const handleDeleteImage = async () => {
    if (!user) return;
    const imageRef = ref(storage, `images/${user.uid}`);
    await deleteObject(imageRef);
    await updateDoc(doc(db, "Personal Details", docId), { profilePicture: "" });
    setImageUrl(null);
  };

 

  return (
    <div
      className={`pb-10 font-poppins duration-300 xs:mx-6 sm:mx-6 ${
        openSidebar ? "" : "mr-36"
      }`}
    >
      <div className="bg-white shadow-lg shadow-gray-300 dark:shadow-none px-10 py-10 mt-6 rounded-3xl dark:bg-gray-700 ">
        <form onSubmit={handleSubmit}>
          <h1 className="xs:text-2xl text-4xl font-bold text-gray-700 dark:text-gray-100">
            PERSONAL DETAILS
          </h1>
          <div className="bg-indigo-700 h-2 w-16 rounded-full mb-8"></div>
          <div>
            <div className="md:flex gap-10 ">
              <div className=" md:w-full">
                <InputDetails
                  heading={"First Name"}
                  htmlFor={"fname"}
                  name={"fname"}
                  type={"text"}
                  value={personalDetails.fname}
                  placeholder={"Enter First Name"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
              <div className="xs:mt-4 md:w-full">
                <InputDetails
                  heading={"Last Name"}
                  htmlFor={"lname"}
                  name={"lname"}
                  type={"text"}
                  value={personalDetails.lname}
                  placeholder={"Enter Last Name"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="mt-4 md:flex gap-10">
              <div className="md:w-full">
                <InputDetails
                  heading={"Profession"}
                  htmlFor={"profession"}
                  name={"profession"}
                  type={"text"}
                  value={personalDetails.profession}
                  placeholder={"eg. Software Engineer"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
              <div className=" xs:mt-4 md:w-full">
                <InputDetails
                  heading={"Location"}
                  htmlFor={"location"}
                  name={"location"}
                  type={"text"}
                  value={personalDetails.location}
                  placeholder={"eg. Karachi, Pakistan"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="mt-4 md:flex gap-10 ">
              <div className="md:w-full">
                <InputDetails
                  heading={"Mobile No"}
                  htmlFor={"mobileno"}
                  name={"mobileno"}
                  value={personalDetails.mobileno}
                  type={"text"}
                  placeholder={"+92-3409322323"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
              <div className="xs:mt-4 md:w-full">
                <InputDetails
                  heading={"Date of Birth"}
                  htmlFor={"dob"}
                  name={"dob"}
                  value={personalDetails.dob}
                  type={"date"}
                  placeholder={"Enter Date of Birth"}
                  width={"full"}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col ">
              <label
                className="font-semibold text-lg ml-2 text-gray-600 dark:text-gray-200"
                htmlFor="aboutme"
              >
                About Me
              </label>
              <TextArea
                name={"aboutme"}
                id={"aboutme"}
                onChange={onChange}
                value={personalDetails.aboutme}
                rows={4}
                placeholder="Write brief introduction about yourself"
              />
            </div>
            <div className="mt-4 font-poppins flex flex-col">
              <label
                className="font-semibold text-lg ml-2 text-gray-600 dark:text-gray-200"
                htmlFor="profilePicture"
              >
                {imageUrl ? "Edit Picture" : "Upload Picture"}
              </label>
              <input
                className="bg-gray-100 cursor-pointer dark:bg-gray-600 dark:text-gray-200"
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
                onChange={handleFileChange}
              />
              {imageUrl && (
                <div className=" inline-block ">
                  <img
                    src={imageUrl}
                    alt="Profile"
                    className="mt-4 w-32 h-32 object-cover rounded-full"
                  />
                  <div
                    onClick={handleDeleteImage}
                    className="  inline-flex cursor-pointer items-center gap-1 mt-2 text-gray-100 bg-red-600 hover:bg-red-700 py-2 px-3 rounded-xl font-semibold"
                  >
                    <h1>Delete Image</h1>
                    <div>
                      <MdDelete />
                    </div>
                  </div>
                </div>
              )}
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div className="mt-4">
              <InputButton type={"submit"} name={docId ? "Update" : "Save"} loading={loading} />
            </div>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default PersonalDetails;
