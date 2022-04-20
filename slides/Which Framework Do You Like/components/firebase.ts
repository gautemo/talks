import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, setDoc, doc } from "firebase/firestore";
import { ref, computed } from 'vue'

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
    { name: 'Vue', points: 0, to: [] }, 
    { name: 'Svelte', points: 0, to: [] },
    { name: 'React', points: 0, to: [] }, 
    { name: 'Angular', points: 0, to: [] },
    { name: 'Usikker', points: 0, to: [] },
  ],
  language: [
    { name: 'JavaScript', points: 0, to: ['Vue', 'React', 'Svelte'] }, 
    { name: 'TypeScript', points: 0, to: ['Vue', 'React', 'Svelte', 'Angular'] },
  ],
  template: [
    { name: 'JSX', points: 0, to: ['React', 'Vue'] }, 
    { name: 'HTML', points: 0, to: ['Angular'] },
    { name: 'SFC', points: 0, to: ['Vue', 'Svelte'] },
  ],
  if: [
    { name: 'React', points: 0, to: [] }, 
    { name: 'Directive', points: 0, to: ['Vue', 'Angular'] },
    { name: 'Svelte', points: 0, to: [] },
  ],
  list: [
    { name: 'React', points: 0, to: [] }, 
    { name: 'Angular', points: 0, to: [] },
    { name: 'Vue', points: 0, to: [] },
    { name: 'Svelte', points: 0, to: [] },
  ],
  state: [
    { name: 'React', points: 0, to: [] }, 
    { name: 'Angular', points: 0, to: [] },
    { name: 'Vue', points: 0, to: [] },
    { name: 'Svelte', points: 0, to: [] },
  ],
  stateobject: [
    { name: 'React', points: 0, to: [] }, 
    { name: 'Angular', points: 0, to: [] },
    { name: 'Vue', points: 0, to: [] },
    { name: 'Svelte', points: 0, to: [] },
  ],
  computed: [
    { name: 'React', points: 0, to: [] }, 
    { name: 'Angular', points: 0, to: [] },
    { name: 'Vue', points: 0, to: [] },
    { name: 'Svelte', points: 0, to: [] },
  ],
  props: [
    { name: 'React', points: 0, to: [] }, 
    { name: 'Angular', points: 0, to: [] },
    { name: 'Vue', points: 0, to: [] },
    { name: 'Svelte', points: 0, to: [] },
  ],
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

export function setVoteIndex(index: number){
  setDoc(doc(db, 'state', 'vote'), { index })
}

export const dx = computed(() => {
  const points = {
    Vue: 0,
    React: 0,
    Angular: 0,
    Svelte: 0,
  }
  for (let [p, val] of Object.entries(votes.value)) {
    if(p === 'prefers') continue
    for(const vote of val){
      if(vote.name === 'Vue' || vote.to.includes('Vue')) points.Vue += vote.points
      if(vote.name === 'React' || vote.to.includes('React')) points.React += vote.points
      if(vote.name === 'Angular' || vote.to.includes('Angular')) points.Angular += vote.points
      if(vote.name === 'Svelte' || vote.to.includes('Svelte')) points.Svelte += vote.points
    }
  }
  const total = points.Angular + points.React + points.Svelte + points.Vue
  points.Angular = Math.round((points.Angular / total) * 100)
  points.React = Math.round((points.React / total) * 100)
  points.Svelte = Math.round((points.Svelte / total) * 100)
  points.Vue = Math.round((points.Vue / total) * 100)
  return [
    { name: 'Angular', points: points.Angular },
    { name: 'React', points: points.React },
    { name: 'Svelte', points: points.Svelte },
    { name: 'Vue', points: points.Vue },
  ].sort((a,b) => b.points - a.points)
})