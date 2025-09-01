---
theme: default
class: 'text-center'
highlighter: shiki
info: |
  ## What's new in JavaScript - ES2025
  By [Gaute Meek Olsen](https://gaute.dev)
drawings:
  persist: false
routerMode: hash  
fonts:
  sans: 'Baloo Chettan, Roboto'
  serif: 'Baloo Chettan, Roboto'
css: unocss
---

<Heart/>

# Nyheter i JavaScript
## ES2025

<style>
  h1,h2{
    transform: rotate(-5deg);
    background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
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
  <div class="column">
    <img src="/gaute.jpg" class="me">
    <h1>Gaute Meek Olsen</h1>
  </div>
  <img src="/Capra.png" class="capra">
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
  display: grid;
  place-items: center;
  gap: 10px;
}

img.me{
  height: 320px;
  border-radius: 40px;
  object-fit: contain;
}

img.capra {
  height: 250px;
  object-fit: contain;
}

h1{
  font-size: 3rem;
}
</style>

---
layout: cover
class: 'text-center'
---

<Heart/>

<div class="space"></div>

<h1>Nyheter i JavaScript</h1>
<h2>ES2025</h2>

<p class="gjemt" v-mark.crossed>JavaScript</p>

<p class="ecma" v-click>ECMAScript</p>

<style>
  h1,h2{
    transform: rotate(-5deg);
    background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }

  .space {
    height: 91px;
  }

  h2{
    font-size: 3rem;
  }

  .gjemt {
    translate: 435px -130px;
    width: fit-content;
    font-size: 3em;
    rotate: -5deg;
    color: transparent;
  }

  .ecma {
    translate: 420px -270px;
    width: fit-content;
    font-size: 3.3em;
    rotate: -5deg;
    background-image: linear-gradient(to top, #9be15d 0%, #00e3ae 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    line-height: 5rem;
  }
</style>

---
layout: center
---

<img src="/eich.jpg"/>

<p class="quote">ECMAScript was always an unwanted trade name that sounds like a skin disease.</p>

<div class="space"></div>

<a href="https://javascript.tm/" target="_blank" v-click>javascript.tm</a>

<style>
  img {
    width: 100px;
    border-radius: 50px;
    translate: -290px -80px;
  }

  .quote {
    background-color: white;
    color: #333;
    white-space: pre;
    width: fit-content;
    height: fit-content;
    filter: drop-shadow(0px 2px 3px #333);
    border-radius: 5px;
    margin: auto;
    padding: 15px 20px;
    position: absolute;
    font-style: italic;
    transition: 10px -10px;
    translate: -150px -150px;
  }

  .quote:before {
    border-top: 7px solid #0000;
    border-bottom: 7px solid #0000;
    border-right: 10px solid white;
    height: 0;
    filter: drop-shadow(1px 0px white);
    margin: auto 0;
    top: 0;
    bottom: 0;
    right: 100%;
    content: "";
    position: absolute;
  }

  a {
    font-size: 2rem;
  }

  .space {
    height: 11px;
  }
</style>

---
clicks: 6
---

# Proposals lifecycle

<Arrow x1="100" y1="400" x2="850" y2="400" />

<p class="translate-x-770px translate-y-318px">juni</p>

<p
  class="proposal"
  v-motion
  :initial="{ x: 800, y: 50, scale: 2 }"
  :click-1="{ x: 50, y: 200, scale: 1 }"
  :click-2="{ x: 175 }"
  :click-3="{ x: 310 }"
  :click-4="{ x: 420 }"
  :click-5="{ x: 510 }"
  :click-6="{ x: 652 }"
>
📜
</p>

<p v-click="1" class="translate-x-40px translate-y-238px">stage 0</p>
<p v-click="2" class="translate-x-180px translate-y-198px">stage 1</p>
<p v-click="3" class="translate-x-315px translate-y-158px">stage 2</p>
<p v-click="4" class="translate-x-425px translate-y-118px">stage 2.7</p>
<p v-click="5" class="translate-x-520px translate-y-78px">stage 3</p>
<p v-click="6" class="translate-x-660px translate-y-38px">stage 4</p>

<ul v-click="[1]" class="translate-y--300px">
  <li>Ide</li>
</ul>

<ul v-click="[2]" class="translate-y--331px">
  <li>Forslag</li>
  <li>Eksempler</li>
  <li>Champion</li>
</ul>

<ul v-click="[3]" class="translate-y--425px">
  <li>Utkast</li>
  <li>Syntax</li>
  <li>Implementasjonsdetaljer</li>
</ul>

<ul v-click="[4]" class="translate-y--520px">
  <li>Godkjent i prinsippet</li>
  <li>Under validering</li>
</ul>

<ul v-click="[5]" class="translate-y--582px">
  <li>Kandidat</li>
  <li>Venter på nettlesere/JavaScript engines</li>
</ul>

<ul v-click="[6]" class="translate-y--645px">
  <li>To implementasjoner</li>
  <li>Offisielt</li>
</ul>

<style>
.proposal {
  font-size: 3rem;
}
</style>

---

<CodeSlide label="Set methods" :snippetId="0" :showVenn="true"/>

---

# Import Attributes & JSON modules

````md magic-move
```js
import json from './data.json'
```
```js
import json from './data.json' with { type: 'json' }
```
```js {3}
import json from './data.json' with { type: 'json' }

const jsonModule = await import('./data.json', { with: { type: 'json' } })
```
```js {5}
import json from './data.json' with { type: 'json' }

const jsonModule = await import('./data.json', { with: { type: 'json' } })

export { default } from './data.json' with { type: 'json' }
```
````

---

# Iterator Helpers

<ul class="words" v-click.hide>
  <li class="rotate-10 translate-x-400px translate-y-90px">map</li>
  <li class="translate-x-120px translate-y-10px">filter</li>
  <li class="translate-x-320px translate-y-10px">take</li>
  <li class="translate-x-520px translate-y-10px">drop</li>
  <li class="rotate--4 translate-x-120px translate-y-10px">flatMap</li>
  <li class="rotate-9 translate-x-250px translate-y-70px">reduce</li>
  <li class="translate-x-620px translate-y-10px">toArray</li>
  <li class="translate-x-20px translate-y-10px">forEach</li>
  <li class="translate-x-190px translate-y-10px">some</li>
  <li class="translate-x-520px translate-y-10px">every</li>
  <li class="translate-x-320px translate-y-10px">find</li>
</ul>

<ul v-click="1" class="translate-y--320px">
  <li>Iterator</li>
  <li>Generator</li>
  <li>Iterable</li>
</ul>

<style>
  .words {
    list-style: none;
  }
</style>

---

<CodeSlide label="Iterator" :snippetId="1"/>

---

<CodeSlide label="Iterable" :snippetId="2"/>

---

<CodeSlide label="Generator" :snippetId="3"/>

---

<CodeSlide label="Iterator Helpers" :snippetId="4"/>

---

# Iterator Helpers

- map
- filter
- take
- drop
- flatMap
- reduce
- toArray
- forEach
- some
- every
- find

---

<CodeSlide label="Promise.try" :snippetId="5"/>

---

<CodeSlide label="Duplicate named capturing groups" :snippetId="6"/>

---

<CodeSlide label="Regular Expression Pattern Modifiers" :snippetId="7"/>

---

<CodeSlide label="Regular Expression Escaping" :snippetId="8"/>

---


# Float16Array

<ul v-click>
  <li>float-backed canvases</li>
  <li>WebGPU</li>
  <li>WebGL</li>
  <li>deep learning models</li>
</ul>

---

<CodeSlide label="Float16Array" :snippetId="9"/>

---

# Takk for meg!

## Recap
<ul>
  <li>https://gaute.dev/talks</li>
  <li>https://gaute.dev/dev-blog</li>
  <li><a href="https://bsky.app/profile/gaute.bsky.social" target="_blank"><simple-icons-bluesky class="text-blue-500"/></a> og <a href="https://x.com/GauteMeekOlsen" target="_blank"><logos-twitter/></a></li>
</ul>
