---
theme: default
class: 'text-center'
layout: center
highlighter: shiki
lineNumbers: false
info: |
  ## Intro to Vite
drawings:
  persist: false
---

<logos-vitejs class="text-12xl"/>
<h2>Vite.js</h2>
<twemoji:flag-for-flag-france class="text-4xl flag"/>

<style>
  .flag{
    position: absolute;
    right: 25px;
    bottom: 25px;
    filter: drop-shadow(0 0 2px #ffffff40);
  }
</style>
---

# What takes time in webdev?

<section>
  <logos-webpack class="text-12xl"/>
  <logos-sass class="text-10xl"/>
  <logos-npm class="text-10xl"/>
  <logos-react class="text-10xl"/>
  <logos-babel class="text-10xl"/>
  <logos-typescript-icon class="text-8xl"/>
</section>

<style>
  section svg:nth-child(1){
    position: absolute;
    inset: 0;
    margin: auto;
  }
  section svg:nth-child(2){
    position: absolute;
    inset: 0;
    transform: translate(160px, -100px);
    margin: auto;
  }
  section svg:nth-child(3){
    position: absolute;
    inset: 0;
    margin: auto;
    transform: translate(-160px, 100px);
  }
  section svg:nth-child(4){
    position: absolute;
    inset: 0;
    margin: auto;
    transform: translate(80px, 140px);
    z-index: 2;
  }
  section svg:nth-child(5){
    position: absolute;
    inset: 0;
    margin: auto;
    transform: translate(-160px, -100px);
  }
  section svg:nth-child(6){
    position: absolute;
    inset: 0;
    margin: auto;
    transform: translate(180px, 20px);
  }
</style>

---

<img src="/bundler.png" alt="Bundle based dev server"/>

<style>
  img{
    position: absolute;
    inset: 0;
  }
</style>

---
layout: center
---

<section>
  <Tweet id="1252173663199277058"/>
</section>

<style>
section{
  min-width: 500px;
}
</style>

---
layout: center
---

<div class="features">
  <h2>💡 Instant Server Start</h2>
  <h2>⚡️ Lightning Fast HMR</h2>
  <h2>🛠️ Rich Features</h2>
  <h2>📦 Optimized Build</h2>
  <h2>🔩 Universal Plugins</h2>
  <h2>🔑 Fully Typed APIs</h2>
</div>

<style>
  .features{
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr 1fr;
    gap: 2em;
  }

  h2{
    font-size: 1.4rem;
  }
</style>

---

<img src="/esm.png" alt="ESM based dev server"/>

<style>
  img{
    position: absolute;
    inset: 0;
  }
</style>

---

<h1><logos-esbuild class="text-6xl"/>esbuild</h1>

## An extremely fast JavaScript bundler

<img src="/esbuild.png" alt="esbuild stats"/>

<style>
  h1{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img{
    margin-top: 3rem;
  }
</style>

---

# Unofficial stats

| Tool                   | Create project + npm install | dev start | HMR | Build |
| ---------------------- | ---------------------------- | --------- | --- | ----- |
| Create React App (CRA) | 4min 18s                     | 25s       | 2s  | 42s   |
| Vite                   | 28s                          | 2s        | ⚡  | 10s   |

<div class="m-14"></div>

| Tool                   | node_modules         | npm ls      | 
| ---------------------- | -------------------- | ----------- | 
| Create React App (CRA) | 170MB - 34 863 files | 3456 lines  |
| Vite                   | 100MB - 2 051 files  | 149 lines   |

---

# salg-gpluss stats

| Tool                   | node_modules         | dev start | HMR | hmr keeps state | npm ci | npm build |
| ---------------------- | -------------------- | --------- | ----| --------------- | ------ | --------- |
| Create React App (CRA) | 449MB - 80 154 files | 32s       | 4s  | ❌             | 1m 4s  | 1m 10s    |
| Vite                   | 387MB - 64 677 files | 12s       | ⚡  | ✔️             | 55s     | 30s      |


---

# Is it ready or just the latest hype?

- 33k GitHub stars
- 6 million npm downloads
- 1.5 years old

## Used/recommended in

- SvelteKit
- Vue
- Astro
- Solid

---

<img src="/demo.png" alt="demo time"/>

<style>
  img{
    position: absolute;
    inset: 0;
  }
</style>