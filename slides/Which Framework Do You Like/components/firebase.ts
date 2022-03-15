import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
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
const db = getFirestore();
const votesCollection = collection(db, 'votes')

const initial = () => ({
  prefers: [
    { name: 'Vue', points: 0 }, 
    { name: 'Svelte', points: 0 },
    { name: 'React', points: 0 }, 
    { name: 'Angular', points: 0 },
    { name: 'Usikker', points: 0 },
  ]
})
export const votes = ref(initial())
export type voteKeys = keyof typeof votes.value;
onSnapshot(votesCollection, snapshot => {
  const newState = initial()
  for(const doc of snapshot.docs){
    const data = doc.data()
    for(const [prop, value] of Object.entries(data)){
      newState[prop as voteKeys].find(({name}) => name === value).points++
    }
  }
  votes.value = newState
})