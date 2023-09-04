---
theme: default
class: 'text-center'
highlighter: shiki
info: |
  ## What's new in JavaScript - ES2023
  By [Gaute Meek Olsen](https://twitter.com/GauteMeekOlsen)
drawings:
  persist: false
routerMode: hash  
fonts:
  sans: 'Baloo Chettan, Roboto'
  serif: 'Baloo Chettan, Roboto'
css: unocss
---

<Heart/>

# What's new in JavaScript
## ES2023

<style>
  h1,h2{
    transform: rotate(-5deg);
    background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }

  h2{
    font-size: 3rem;
  }
</style>

---

<div class="row">
  <img src="/gaute.jpg">
  <div class="column">
    <h1>Gaute Meek Olsen</h1>
    <Capra/>
  </div>
</div>

<style>
.row{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 5rem;
}

.column{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img{
  height: 320px;
  border-radius: 40px;
}

h1{
  font-size: 3rem;
}
</style>

---

## Stages

<ol>
  <li :class="{active: stage === 0}" @click="stage = 0">0</li>
  <li :class="{active: stage === 1}" @click="stage = 1">1</li>
  <li :class="{active: stage === 2}" @click="stage = 2">2</li>
  <li :class="{active: stage === 3}" @click="stage = 3">3</li>
  <li :class="{active: stage === 4}" @click="stage = 4">4</li>
</ol>

<ul>
  <li v-if="stage === 0">Ide</li>
  <li v-if="stage === 1">Forslag</li>
  <li v-if="stage === 1">Eksempler</li>
  <li v-if="stage === 2">Utkast</li>
  <li v-if="stage === 2">Syntax, implementasjonsdetaljer</li>
  <li v-if="stage === 3">Kandidat</li>
  <li v-if="stage === 3">Venter på nettlesere/JavaScript engines</li>
  <li v-if="stage === 4">Offisielt</li>
  <li v-if="stage === 4">To implementasjoner</li>
</ul>

<script setup>
import { ref } from 'vue'
const stage = ref(-1)
</script>

<style>
ol {
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
}

ol li {
  font-size: 2rem;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background-color: #bdc1c6ad;
  display: grid;
  justify-items: center;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 4.5rem !important;
  border: 2px solid #ffffff8a;
  cursor: pointer;
}

ol li.active{
  border: 2px solid white;
  background-color: #ff5858;
  text-shadow: 1px 2px 2px black;
}

ol li::marker {
  content: '';
}

ul li {
  font-size: 1.5rem;
}
</style>

---

<CodeSlide label="findLast" :snippetId="0"/>

---

<CodeSlide label="findLastIndex" :snippetId="1"/>

---

<CodeSlide label="toSorted" :snippetId="2"/>

---

<CodeSlide label="toReversed" :snippetId="3"/>

---

<CodeSlide label="toSpliced" :snippetId="4"/>

---

<CodeSlide label="with" :snippetId="5"/>

---

<CodeSlide label="Symboler i WeakMap, WeakSet og WeakRef" :snippetId="6"/>

---

<CodeSlide label="Hashbang" :snippetId="7"/>

---

<img src="/jz2023_capra.png">

---

# Takk for meg!

<Tweet id="1698794730820161841" scale="0.7"/>