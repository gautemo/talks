---
theme: default
class: 'text-center'
highlighter: shiki
info: |
  ## What's new in JavaScript - ES2021
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
## ES2022



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

<span>JavaScript</span>
<span>ECMAScript</span>
<span>ES</span>
<span>TC39</span>
<span>ES6</span>
<span>ES2015</span>

<style>
span {
  position: absolute;
  font-size: 2.5em;
}
span:nth-child(1) {
  top: 120px;
  left: 200px;
}
span:nth-child(2) {
  top: 320px;
  left: 100px;
}
span:nth-child(3) {
  right: 420px;
  bottom: 300px;
}
span:nth-child(4) {
  top: 190px;
  left: 700px;
}
span:nth-child(5) {
  bottom: 120px;
  right: 200px;
}
span:nth-child(6) {
  top: 420px;
  left: 400px;
}
</style>

---
layout: center
clicks: 3
---

<section>
  <div class="ecma">
    <span>Ecma international</span>
    <span>TC39</span>
  </div>
  <material-symbols-arrow-forward-rounded v-click="1"/>
  <div v-click="1">ECMAScript</div>
  <material-symbols-arrow-forward-rounded v-click="2"/>
  <div v-click="2">JavaScript</div>
</section>

<section v-click="3">
  <div>ES6</div>
  <div>===</div>
  <div>ES2015</div>
</section>

<style>
section {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  font-size: 1.7em;
}

.ecma {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

---
layout: center
---

# ES2022 (ES13)

<style>
  h1{
    background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
</style>

---

<CodeSlide label="Top-level await" :snippetId="0"/>

---

<CodeSlide label=".at()" :snippetId="1"/>

---

<CodeSlide label="Error cause" :snippetId="2"/>

---

<CodeSlide label="Object.hasOwn" :snippetId="3"/>

---

<CodeSlide label="RegExp match indices" :snippetId="4"/>

---

<CodeSlide label="class - public field" :snippetId="5"/>

---

<CodeSlide label="class - private" :snippetId="6"/>

---

<CodeSlide label="class - static" :snippetId="7"/>

---

# Takk for meg!

TODO
<Tweet id="1468895442184323072"/>