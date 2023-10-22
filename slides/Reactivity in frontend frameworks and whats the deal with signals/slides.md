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

<h1 class="translate-y-30px">Reaktivitet i webrammeverk og hva greia med signals er</h1>

<img src="/bricks.svg" alt="Lego bricks" class="scale-70 translate-y-30px">

<h2 class="scale-80 translate-x--228px translate-y--190px c-black">Reaktivitet</h2>

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
transition: fade
---

# Reaktivitet tabell

|                                            | <logos-react class="text-5xl"/> | <logos-svelte-icon class="text-5xl svelte"/> | <logos-vue class="text-5xl"/> | <logos-solidjs-icon class="text-5xl"/>   | <logos-preact class="text-5xl"/>   | <logos-qwik-icon class="text-5xl"/>   | <logos-angular-icon class="text-5xl"/>   | <logos-svelte-icon class="text-5xl svelte"/> |
| ------------------------------------------ | ------------------------------- | -------------------------------------------- | ----------------------------- | ---------------------------------------- | ---------------------------------- | ------------------------------------- | ---------------------------------------- | -------------------------------------------- |
| mutable vs immutable API                   |                                 |                                              |                               |                                          |                                    |                                       |                                          |                                              |
| State er alltid i sync                     |                                 |                                              |                               |                                          |                                    |                                       |                                          |                                              |
| Re-render                                  |                                 |                                              |                               |                                          |                                    |                                       |                                          |                                              |
| Fungerer utenfor komponenten               |                                 |                                              |                               |                                          |                                    |                                       |                                          |                                              |
| Fungerer utenfor rammeverk                 |                                 |                                              |                               |                                          |                                    |                                       |                                          |                                              |

<style>
.svelte {
  outline: 1px dashed red;
}
</style>

---

# Reaktivitet tabell

|                                            | <logos-react class="text-5xl"/> | <logos-vue class="text-5xl"/> | <logos-solidjs-icon class="text-5xl"/>   | <logos-preact class="text-5xl"/>   | <logos-qwik-icon class="text-5xl"/>   | <logos-angular-icon class="text-5xl"/>   | <logos-svelte-icon class="text-5xl"/> |
| ------------------------------------------ | ------------------------------- | ----------------------------- | ---------------------------------------- | ---------------------------------- | ------------------------------------- | ---------------------------------------- | ------------------------------------- |
| mutable vs immutable API                   |                                 |                               |                                          |                                    |                                       |                                          |                                       |
| State er alltid i sync                     |                                 |                               |                                          |                                    |                                       |                                          |                                       |
| Re-render                                  |                                 |                               |                                          |                                    |                                       |                                          |                                       |
| Fungerer utenfor komponenten               |                                 |                               |                                          |                                    |                                       |                                          |                                       |
| Fungerer utenfor rammeverk                 |                                 |                               |                                          |                                    |                                       |                                          |                                       |

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
---

# Reaktivitet API

|                              | <logos-react class="text-5xl"/> | <logos-vue class="text-5xl"/> | <logos-solidjs-icon class="text-5xl"/> | <logos-preact class="text-5xl"/> | <logos-qwik-icon class="text-5xl"/> | <logos-angular-icon class="text-5xl"/> | <logos-svelte-icon class="text-5xl"/> |
| -----------------------------| ------------------------------- | ----------------------------- | -------------------------------------- | -------------------------------- | ----------------------------------- | -------------------------------------- | ------------------------------------- |
| State                        | `useState`                      | `ref`/`reactive`              | `createSignal`                         | `signal`                         | `useSignal`                         | `signal`                               | `$state`                              |
| Beregnet tilstand            | `useMemo`                       | `computed`                    | `() => `                               | `computed`                       | `useComputed$`                      | `computed`                             | `$derived`                            |
| Effekt                       | `useEffect`                     | `watchEffect`                 | `createEffect`                         | `effect`                         | `useTask$`                          | `effect`                               | `$effect`                             |

<style>
table {
  scale: 0.9;
  translate: -46px 0;
}
</style>

---

# Reaktivitet tabell

|                              | <logos-react class="text-5xl"/>                | <logos-vue class="text-5xl"/>                       | <logos-solidjs-icon class="text-5xl"/>               | <logos-preact class="text-5xl"/>                     | <logos-qwik-icon class="text-5xl"/>                  | <logos-angular-icon class="text-5xl"/>              | <logos-svelte-icon class="text-5xl"/>                |
| -----------------------------| ---------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------- |
| mutable vs immutable API     | Immutable                                      | Mutable                                             | Immutable                                            | Mutable                                              | Mutable                                              | Immutable                                           | Mutable                                              |
| State er alltid i sync       | <emojione-cross-mark-button class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/>  | <emojione-white-heavy-check-mark class="text-2xl"/>  | <emojione-cross-mark-button class="text-2xl"/>       | <emojione-white-heavy-check-mark class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/>  |
| Re-render                    | <noto-deciduous-tree class="text-2xl"/>        | <openmoji-puzzle-piece class="text-3xl"/>           | <material-symbols-jump-to-element class="text-3xl"/> | <material-symbols-jump-to-element class="text-3xl"/> | <material-symbols-jump-to-element class="text-3xl"/> | <noto-deciduous-tree class="text-2xl"/>             | <material-symbols-jump-to-element class="text-3xl"/> |
| Fungerer utenfor komponenten | <emojione-cross-mark-button class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/>  | <emojione-white-heavy-check-mark class="text-2xl"/>  | <emojione-cross-mark-button class="text-2xl"/>       | <openmoji-palm-down-hand class="text-2xl"/>(2/3)    | <emojione-white-heavy-check-mark class="text-2xl"/>  |
| Fungerer utenfor rammeverk   | <emojione-cross-mark-button class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/> | <openmoji-palm-down-hand class="text-2xl"/>          | <emojione-white-heavy-check-mark class="text-2xl"/>  | <emojione-cross-mark-button class="text-2xl"/>       | <openmoji-palm-down-hand class="text-2xl"/>(2/3)    | <emojione-cross-mark-button class="text-2xl"/>       |

---
layout: center
---

# Takk for mæ!