import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  updateDoc,
  onSnapshot,
  serverTimestamp,
  arrayUnion
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZZvniHnoxZQNfplSgxBgoWg_Dn59w8N0",
  authDomain: "binalab-a7891.firebaseapp.com",
  projectId: "binalab-a7891",
  messagingSenderId: "394316362316",
  appId: "1:394316362316:web:bdf891ef3017daa91a3ae9"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export {
  collection, doc, setDoc, addDoc, getDoc, getDocs, query, orderBy,
  updateDoc, onSnapshot, serverTimestamp, arrayUnion,
  signInWithEmailAndPassword, signOut, onAuthStateChanged
};

window.BinaLabFirebase = {
  ready: true,

  async submitDiscovery(data) {
    const documentId = data.portalToken || crypto.randomUUID();

    await setDoc(doc(db, "businessDiscoveries", documentId), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      source: "binalab-website",
      status: data.status || "new",
      stage: data.stage || "Discovery",
      progress: Number(data.progress || 10),
      timeline: [
        {
          stage: "Discovery",
          title: "Business Discovery received",
          message: "BinaLab has received your business information.",
          at: new Date().toISOString()
        }
      ]
    });

    return documentId;
  }
};
