// // fetchData.js
// import { useAuth } from "../src/Firebase/AuthContext";
// import { db } from "./firebase-admin"; // Adjust the import path as necessary
// const {user} = useAuth();
// // Use Firestore emulator
// db.settings({
//   host: "localhost:8080", // Default Firestore emulator port
//   ssl: false,
// });

// // Function to fetch data from Firestore
// const fetchData = async (userId) => {
//   try {
//     const timestampRef = db.collection("PersonalDetailsTime").doc(userId);
//     const doc = await timestampRef.get();

//     if (!doc.exists) {
//       console.log("No such document!");
//       return null;
//     } else {
//       const data = doc.data();
//       console.log("Document data:", data);
//       return data;
//     }
//   } catch (error) {
//     console.error("Error fetching document:", error.message);
//     throw new Error("Error fetching document: " + error.message);
//   }
// };

// // Example usage
// const userId = "user.uid"; // Replace with the actual userId you want to fetch data for
// fetchData(userId)
//   .then((data) => {
//     if (data) {
//       console.log(`Timestamp for userId ${userId}:`, data.timestamp);
//     } else {
//       console.log("No data found.");
//     }
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });
