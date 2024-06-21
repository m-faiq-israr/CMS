// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8-twfEAx4_6AMCpQlGY5nmq9rnAkLSxY",
  authDomain: "cms-d4a0e.firebaseapp.com",
  projectId: "cms-d4a0e",
  storageBucket: "cms-d4a0e.appspot.com",
  messagingSenderId: "461557659373",
  appId: "1:461557659373:web:c461e566969cd73cdbfee4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;