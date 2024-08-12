  import React, { createContext, useContext, useState, useEffect } from "react";
  import { onAuthStateChanged, signOut } from "firebase/auth";
  import { auth, db, storage } from "./firebase"; 
  import { ref, getDownloadURL } from "firebase/storage";
  import { onSnapshot } from "firebase/firestore";

  const AuthContext = createContext();

  export const useAuth = () => {
    return useContext(AuthContext);
  };

  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userImage, setUserImage] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        setUser(user);
        setLoading(false);
        if (user) {
          await fetchImage(user.uid);
        }
      });

      return unsubscribe;
    }, []);

    const fetchImage = async (userId) => {
      try {
        const imageRef = ref(storage, `images/${userId}`);
        const url = await getDownloadURL(imageRef);
        setUserImage(url);
      } catch (error) {
        console.error("Error fetching image:", error);
        setUserImage('user1.png'); 
      }
    };

   

    const logout = () => {
      signOut(auth)
        .then(() => {
          console.log("User signed out");
        })
        .catch((error) => {
          console.error("Error signing out:", error);
        });
    };

    const value = {
      user,
      userImage,
      logout,
      fetchImage,
    };

    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  };
