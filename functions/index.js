import admin from "firebase-admin";
import * as functions from "firebase-functions";


if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();


// firebase emulators:start --only functions


//time stamp for personal details
export const personalDetailsTimestamp = functions.https.onRequest(
  async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    const { docId } = req.body;

    if (!docId) {
      console.error("No docId provided in request body");
      res.status(400).send("No docId provided in request body");
      return;
    }

    console.log("Received docId:", docId);

    try {
      const docRef = db.collection("Personal Details").doc(docId);
      await docRef.set(
        {
          timestamp: new Date().toISOString(),
        },
        { merge: true }
      ); // Use set with merge: true to create/update the field

      console.log("Timestamp updated successfully");
      res.status(200).send("Timestamp updated successfully");
    } catch (error) {
      console.error("Error updating timestamp:", error.message);
      res.status(500).send("Error updating timestamp: " + error.message);
    }
  }
);



//timestamp for skill section
export const skillSectionTimestamp = functions.https.onRequest(
  async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    const { docId } = req.body;

    if (!docId) {
      console.error("No docId provided in request body");
      res.status(400).send("No docId provided in request body");
      return;
    }

    console.log("Received docId:", docId);

    try {
      const docRef = db.collection("Skills").doc(docId);
      await docRef.set(
        {
          timestamp: new Date().toISOString(),
        },
        { merge: true }
      ); // Use set with merge: true to create/update the field

      console.log("Timestamp updated successfully");
      res.status(200).send("Timestamp updated successfully");
    } catch (error) {
      console.error("Error updating timestamp:", error.message);
      res.status(500).send("Error updating timestamp: " + error.message);
    }
  }
);

//education section timestamp
export const educationSectionTimestamp = functions.https.onRequest(
  async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    const { docId } = req.body;

    if (!docId) {
      console.error("No docId provided in request body");
      res.status(400).send("No docId provided in request body");
      return;
    }

    console.log("Received docId:", docId);

    try {
      const docRef = db.collection("Education Details").doc(docId);
      await docRef.set(
        {
          timestamp: new Date().toISOString(),
        },
        { merge: true }
      ); // Use set with merge: true to create/update the field

      console.log("Timestamp updated successfully");
      res.status(200).send("Timestamp updated successfully");
    } catch (error) {
      console.error("Error updating timestamp:", error.message);
      res.status(500).send("Error updating timestamp: " + error.message);
    }
  }
);

//experience section timestamp
export const experienceSectionTimestamp = functions.https.onRequest(
  async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    const { docId } = req.body;

    if (!docId) {
      console.error("No docId provided in request body");
      res.status(400).send("No docId provided in request body");
      return;
    }

    console.log("Received docId:", docId);

    try {
      const docRef = db.collection("Experience Details").doc(docId);
      await docRef.set(
        {
          timestamp: new Date().toISOString(),
        },
        { merge: true }
      ); // Use set with merge: true to create/update the field

      console.log("Timestamp updated successfully");
      res.status(200).send("Timestamp updated successfully");
    } catch (error) {
      console.error("Error updating timestamp:", error.message);
      res.status(500).send("Error updating timestamp: " + error.message);
    }
  }
);


//project section timestamp
export const projectSectionTimestamp = functions.https.onRequest(
  async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    const { docId } = req.body;

    if (!docId) {
      console.error("No docId provided in request body");
      res.status(400).send("No docId provided in request body");
      return;
    }

    console.log("Received docId:", docId);

    try {
      const docRef = db.collection("Project Details").doc(docId);
      await docRef.set(
        {
          timestamp: new Date().toISOString(),
        },
        { merge: true }
      ); // Use set with merge: true to create/update the field

      console.log("Timestamp updated successfully");
      res.status(200).send("Timestamp updated successfully");
    } catch (error) {
      console.error("Error updating timestamp:", error.message);
      res.status(500).send("Error updating timestamp: " + error.message);
    }
  }
);