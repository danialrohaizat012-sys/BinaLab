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
  deleteDoc,
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
  updateDoc, deleteDoc, onSnapshot, serverTimestamp, arrayUnion,
  signInWithEmailAndPassword, signOut, onAuthStateChanged
};

// Client-visible projection: never include discovery answers, owner contact details,
// internal tasks, logo data, invoices, or private notes.
export function publicPortalView(data) {
  const stages=['Discovery','Problem Mapping','Blueprint','Prototype','Proposal','Development','Testing','Launch'];
  const stage=stages.includes(data.stage)?data.stage:'Discovery';
  const cleanUrl=value=>{try{const url=new URL(String(value||''));return url.protocol==='https:'?url.href:''}catch{return ''}};
  return {
    businessName:String(data.businessName||'').slice(0,120),
    caseId:String(data.caseId||'').slice(0,50),
    stage,
    status:['new','active','completed','rejected'].includes(data.status)?data.status:'new',
    progress:Math.max(0,Math.min(100,Number(data.progress??10)||0)),
    customerMessage:String(data.customerMessage||'').slice(0,1500),
    timeline:Array.isArray(data.timeline)?data.timeline.slice(-30).map(t=>({
      stage:stages.includes(t.stage)?t.stage:'Discovery',
      message:String(t.message||'').slice(0,1500),
      title:String(t.title||'').slice(0,100),
      at:String(t.at||'').slice(0,50)
    })):[],
    blueprintUrl:cleanUrl(data.blueprintUrl),
    prototypeUrl:cleanUrl(data.prototypeUrl),
    quotationUrl:cleanUrl(data.quotationUrl),
    liveSystemUrl:cleanUrl(data.liveSystemUrl),
    updatedAt:serverTimestamp()
  };
}

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

    // During migration, legacy portal remains available until security rules switch.
    // Once portalViews create is allowed, new leads receive a minimal public view.
    try {
      await setDoc(doc(db, "portalViews", documentId), publicPortalView({
        ...data,
        stage:"Discovery", status:"new", progress:10,
        customerMessage:"BinaLab telah menerima cerita bisnes anda dan sedang membuat semakan awal.",
        timeline:[{stage:"Discovery",title:"Discovery received",message:"BinaLab has received your business information.",at:new Date().toISOString()}]
      }));
    } catch (error) {
      console.warn("Portal view pending owner sync:", error.code||error.message);
    }
    return documentId;
  }
};
