---
theme: default
routerMode: hash
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Reaktivitet i webrammeverk og hva greia med signals er
  By [Gaute Meek Olsen](https://twitter.com/GauteMeekOlsen)
drawings:
  persist: false
transition: slide-left
title: Reaktivitet i webrammeverk og hva greia med signals er
mdc: true
monaco: true
---

# Reaktivitet i webrammeverk og hva greia med signals er

---

# Rammeverk

<img src="/bricks.svg" alt="Lego bricks" class="scale-120 translate-x-10em translate-y-30px">

<h1 class="scale-120 translate-x-370px translate-y--220px c-black">Reaktivitet</h1>

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

# Regneark

<SpreadSheet />

---
src: ./pages/signals.md
---
---

# Reaktivitet tabell

|                                            | <logos-react class="text-5xl"/> | <logos-vue class="text-5xl"/>   | <logos-solidjs-icon class="text-5xl"/>   | <logos-preact class="text-5xl"/>   | <logos-qwik-icon class="text-5xl"/>   | <logos-angular-icon class="text-5xl"/>   |
| ------------------------------------------ | ------------------------------- | ------------------------------- | ---------------------------------------- | ---------------------------------- | ------------------------------------- | ---------------------------------------- |
| mutable vs immutable API                   |                                 |                                 |                                          |                                    |                                       |                                          |
| Ummidelbar oppdatering                     |                                 |                                 |                                          |                                    |                                       |                                          |
| Re-render                                  |                                 |                                 |                                          |                                    |                                       |                                          |
| Fungerer utenfor komponenten               |                                 |                                 |                                          |                                    |                                       |                                          |
| Fungerer utenfor rammeverk                 |                                 |                                 |                                          |                                    |                                       |                                          |

---
src: ./pages/react.md
---

---
src: ./pages/vue.md
---

---
src: ./pages/solid.md
---

---
src: ./pages/preact.md
---

---
src: ./pages/qwik.md
---

---
src: ./pages/angular.md
---

---
src: ./pages/svelte5.md
---
