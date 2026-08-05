// BinaLab Firebase Configuration

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
  messagingSenderId: "394316362316",
  appId: "1:394316362316:web:bdf891ef3017daa91a3ae9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.BinaLabFirebase = {
  ready: true,

  async submitDiscovery(data) {
    const document = await addDoc(collection(db, "businessDiscoveries"), {
      ...data,
      createdAt: serverTimestamp(),
      source: "binalab-website",
      stage: "Discovery",
      status: "new",
      assignedTo: null
    });

    return document.id;
  }
};
