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
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_APP_ID"
};

const configured = !Object.values(firebaseConfig).some(value =>
  String(value).startsWith("PASTE_")
);

let db = null;
let storage = null;

if (configured) {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  storage = getStorage(app);
}

async function uploadFile(file, folder) {
  if (!file) return null;
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const fileRef = ref(storage, `${folder}/${Date.now()}-${safeName}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}

window.BinaLabFirebase = {
  ready: configured,

  async submitDiscovery(data, files) {
    if (!configured || !db || !storage) {
      throw new Error("Firebase belum dikonfigurasi dalam firebase-config.js.");
    }

    const temporaryId = crypto.randomUUID();
    const folder = `business-discoveries/${temporaryId}`;

    const logoUrl = files.logoFile
      ? await uploadFile(files.logoFile, `${folder}/logo`)
      : null;

    const referenceUploads = [];
    for (const file of files.referenceFiles || []) {
      const url = await uploadFile(file, `${folder}/references`);
      referenceUploads.push({
        name: file.name,
        type: file.type,
        size: file.size,
        url
      });
    }

    const document = await addDoc(collection(db, "businessDiscoveries"), {
      ...data,
      logoUrl,
      referenceFiles: referenceUploads,
      createdAt: serverTimestamp(),
      source: "binalab-website"
    });

    return document.id;
  }
};
