// BinaLab Firebase Configuration
// Replace every placeholder below with values from:
// Firebase Console → Project settings → Your apps → Web app configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_APP_ID"
};

const configured = !Object.values(firebaseConfig).some(value =>
  String(value).startsWith("PASTE_")
);

let db = null;

if (configured) {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}


window.BinaLabFirebase = {
  ready: configured,

  async submitDiscovery(data) {
    if (!configured || !db) {
      throw new Error("Firebase belum dikonfigurasi dalam firebase-config.js.");
    }

    const document = await addDoc(collection(db, "businessDiscoveries"), {
      ...data,
      createdAt: serverTimestamp(),
      source: "binalab-website"
    });

    return document.id;
  }
};
