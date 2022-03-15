---
theme: default
routerMode: hash
info: |
  ## Which Framework Do You Like
  By [Gaute Meek Olsen](https://twitter.com/GauteMeekOlsen)
drawings:
  persist: false
---

# Hvilket frontend rammeverk liker du...

<h2 v-click>sånn egentlig?</h2>

---
  
<BarChart title="State of JS 21 - Usage" postfix="%" :bars="[
  { name: 'React', points: 80 }, 
  { name: 'Vue', points: 51 }, 
  { name: 'Angular', points: 54 },
  { name: 'Svelte', points: 20 },
  { name: 'Preact', points: 14 },
  { name: 'Ember', points: 9 },
  { name: 'Lit', points: 7 },
  { name: 'Alpine', points: 6 },
  { name: 'Solid', points: 3 },
  { name: 'Stimulus', points: 2 },
  ]"/>

---

<BarChart title="NPM Installs Weekly" :bars="[
  { name: 'React', points: 15_200_000 }, 
  { name: 'Vue', points: 3_100_000 }, 
  { name: 'Angular', points: 2_900_000 },
  { name: 'Svelte', points: 260_000 },
  { name: 'Preact', points: 1_100_000 },
  { name: 'Ember', points: 3_700 },
  { name: 'Lit', points: 120_000 },
  { name: 'Alpine', points: 86_000 },
  { name: 'Solid', points: 17_000 },
  { name: 'Stimulus', points: 157_000 },
  ]"/>

---

<BarChart title="GitHub Stars" :bars="[
  { name: 'React', points: 184_000 }, 
  { name: 'Vue', points: 194_000 }, 
  { name: 'Angular', points: 80_000 },
  { name: 'Svelte', points: 57_000 },
  { name: 'Preact', points: 31_000 },
  { name: 'Ember', points: 22_000 },
  { name: 'Lit', points: 11_000 },
  { name: 'Alpine', points: 20_000 },
  { name: 'Solid', points: 16_000 },
  { name: 'Stimulus', points: 11_000 },
  ]"/>


---

<BarChart title="Developer Tools Extension Installs" :bars="[
  { name: 'React', points: 140_000+3_000_000 }, 
  { name: 'Vue', points: 90_000+1_200_000 }, 
  { name: 'Angular', points: 100_000 },
  { name: 'Svelte', points: 2_000+10_000 },
  { name: 'Preact', points: 1_000+6_000 },
  { name: 'Ember', points: 2_000+40_000 },
  { name: 'Alpine', points: 1_000+9_000 },
  ]"/>

---

<BarChart title="Stackoverflow Watchers" :bars="[
  { name: 'React', points: 309_000 }, 
  { name: 'Vue', points: 84_200 }, 
  { name: 'Angular', points: 178_000 },
  { name: 'Svelte', points: 2_300 },
  { name: 'Preact', points: 225 },
  { name: 'Ember', points: 5_100 },
  { name: 'Lit', points: 49 },
  { name: 'Alpine', points: 232 },
  { name: 'Solid', points: 26 },
  { name: 'Stimulus', points: 119 },
  ]"/>

---

<BarChart title="Slått sammen" postfix="%" :bars="[
  { name: 'React', points: Number(([32.5,66.2,29.4,68.2,53.3].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Vue', points: Number(([20.7,13.5,31,28,14.5].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Angular', points: Number(([22,12.6,12.8,2.2,30.7].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Svelte', points: Number(([8.1,1.1,9.1,0.3,0.4].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Preact', points: Number(([5.7,4.8,5,0.2,0].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Ember', points: Number(([3.7,0,3.5,0.9,0.9].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Lit', points: Number(([2.8,0.5,1.8,0,0].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Alpine', points: Number(([2.4,0.4,3.2,0.2,0].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Solid', points: Number(([1.2,0.1,2.6,0,0].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Stimulus', points: Number(([0.8,0.7,1.8,0,0].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  ]"/>

---

<Vote title="Hvilken foretrekker du?" votekey="prefers"/>