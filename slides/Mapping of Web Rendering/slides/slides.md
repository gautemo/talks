---
theme: ./theme
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Kartlegging av web rendering
  By [Gaute Meek Olsen](https://gaute.dev)
transition: slide-up
css: unocss
fonts:
  sans: 'Be Vietnam Pro'
  serif: 'Be Vietnam Pro'
title: Kartlegging av web rendering
---

<section>
  <h1>Kartlegging av web rendering</h1>
  <h2>
    Av
    <a href="https://gaute.dev" target="_blank" rel="noopener noreferrer">Gaute Meek Olsen</a>
  </h2>
  <img
    src="https://pbs.twimg.com/profile_images/1291071272407924737/wRtyy8aN_400x400.jpg"
    alt="Gaute Meek Olsen"
    height="200"
    width="200"
  >
</section>

<style scoped>
section {
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr;
  justify-items: center;
}

h1 {
  text-align: center;
  padding-top: 1em;
  font-size: 2.5em;
  text-shadow: 2px 2px #F6416C;
}

img {
  border-radius: 50%;
}
</style>

---

<section>
  <h2>Men nå har det blitt så mange begreper</h2>
  <ul>
    <li>SPA</li>
    <li>MPA</li>
    <li>SSG</li>
    <li>SSR</li>
    <li>CSR</li>
    <li>Hydration</li>
    <li>Resumability</li>
    <li>Islands</li>
    <li>Progressive enhancement</li>
    <li>Partial hydration</li>
    <li>Edge rendering</li>
    <li>...</li>
  </ul>
</section>

<style>
section {
  display: grid;
  grid-template-rows: auto 1fr;
}

ul {
  list-style: none !important;
  margin: 0;
  padding: 2em;
  font-size: 1.3em;
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr 1fr;
  text-align: center;
}

li {
  margin: 0 !important;
  padding: 0 !important;
}
</style>

---

Eksempel - handleliste

<Handlekurv :preffilled="true" :items="['egg', 'melk']"/>

---
src: ./pages/ssr.md
---

---
src: ./pages/csr.md
---

---
src: ./pages/mpa.md
---

---
src: ./pages/spa.md
---

---
src: ./pages/ssg.md
---

---
src: ./pages/hydration.md
---

---
src: ./pages/resumability.md
---

---
src: ./pages/compare.md
---

---
src: ./pages/edge-rendering.md
---

---
src: ./pages/conclusion.md
---