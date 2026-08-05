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
  apiKey: "AIzaSyDZZvniHnoxZQNfplSgxBg0Wg_Dn59w8N0",
  authDomain: "binalab-a7891.firebaseapp.com",
  projectId: "binalab-a7891",
  storageBucket: "binalab-a7891.firebasestorage.app",
  messagingSenderId: "394316362316",
  appId: "1:394316362316:web:bdf891ef3017daa91a3ae9"
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
