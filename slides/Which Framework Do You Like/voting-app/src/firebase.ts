import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc, onSnapshot } from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { ref } from 'vue'

const firebaseConfig = {
  apiKey: "AIzaSyBVgnEmbi0Pmx2tcUPFxStmLnoVo3_bgLs",
  authDomain: "talk---fe-framework.firebaseapp.com",
  projectId: "talk---fe-framework",
  storageBucket: "talk---fe-framework.appspot.com",
  messagingSenderId: "987161579132",
  appId: "1:987161579132:web:5f588f643cf4aab69c83f9"
};

initializeApp(firebaseConfig);

const auth = getAuth();
signInAnonymously(auth)
const uid = ref<string | undefined>()
onAuthStateChanged(auth, (user) => uid.value = user?.uid);

const db = getFirestore();

export function vote(voteKey: string, value: string){
  if(uid.value){
    const voteUserRef = doc(db, 'votes', uid.value)
    setDoc(voteUserRef, {[voteKey]: value }, { merge: true })
  }
}

export const voteIndex = ref(0)

onSnapshot(doc(db, 'state', 'vote'), (doc) => {
  const data = doc.data() as {index: number} 
  voteIndex.value = data.index
})