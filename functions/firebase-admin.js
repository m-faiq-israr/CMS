import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, apps, cert } from "firebase-admin/app";
import serviceAccount from "../config/serviceAccountKey.json"; // Replace with the path to your service account key

// Initialize Firebase Admin SDK if not already initialized
if (!apps.length) {
  initializeApp({
    credential: cert(serviceAccount),
    projectId: "cms-d4a0e", // Add your project ID here
    databaseURL: "https://cms-d4a0e.firebaseio.com",
  });
}

const db = getFirestore();

export { db };
