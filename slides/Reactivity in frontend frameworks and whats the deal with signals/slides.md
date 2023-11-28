---
theme: default
routerMode: hash
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Reactivity in frontend frameworks and what's the deal with signals?
  By [Gaute Meek Olsen](https://twitter.com/GauteMeekOlsen)
drawings:
  persist: false
transition: slide-left
title: Reactivity in frontend frameworks and what's the deal with signals?
mdc: true
monaco: true
---

<h1 class="translate-y-30px scale-80">Reactivity in frontend frameworks and what's the deal with signals?</h1>

<img src="/bricks.svg" alt="Lego bricks" class="scale-70 translate-y--30px">

<h2 class="scale-80 translate-x--228px translate-y--250px c-black">Reactivity</h2>

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

# Spreadsheet

<SpreadSheet />

---
src: ./pages/signals.md
---
---
transition: fade
---

# Reactivity table

|                                            | <logos-react class="text-5xl"/> | <logos-svelte-icon class="text-5xl svelte"/> | <logos-vue class="text-5xl"/> | <logos-solidjs-icon class="text-5xl"/>   | <logos-preact class="text-5xl"/>   | <logos-angular-icon class="text-5xl"/>   | <logos-svelte-icon class="text-5xl svelte"/> |
| ------------------------------------------ | ------------------------------- | -------------------------------------------- | ----------------------------- | ---------------------------------------- | ---------------------------------- | ---------------------------------------- | -------------------------------------------- |
| mutable vs immutable API                   |                                 |                                              |                               |                                          |                                    |                                          |                                              |
| State is always in sync                    |                                 |                                              |                               |                                          |                                    |                                          |                                              |
| Re-render                                  |                                 |                                              |                               |                                          |                                    |                                          |                                              |
| Works outside the component                |                                 |                                              |                               |                                          |                                    |                                          |                                              |
| Works outside the framework                |                                 |                                              |                               |                                          |                                    |                                          |                                              |

<style>
.svelte {
  outline: 1px dashed red;
}
</style>

---

# Reactivity table

|                                            | <logos-react class="text-5xl"/> | <logos-vue class="text-5xl"/> | <logos-solidjs-icon class="text-5xl"/>   | <logos-preact class="text-5xl"/>   | <logos-angular-icon class="text-5xl"/>   | <logos-svelte-icon class="text-5xl"/> |
| ------------------------------------------ | ------------------------------- | ----------------------------- | ---------------------------------------- | ---------------------------------- | ---------------------------------------- | ------------------------------------- |
| mutable vs immutable API                   |                                 |                               |                                          |                                    |                                          |                                       |
| State is always in sync                    |                                 |                               |                                          |                                    |                                          |                                       |
| Re-render                                  |                                 |                               |                                          |                                    |                                          |                                       |
| Works outside the component                |                                 |                               |                                          |                                    |                                          |                                       |
| Works outside the framework                |                                 |                               |                                          |                                    |                                          |                                       |

---

<Counter />

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
src: ./pages/angular.md
---

---
src: ./pages/svelte5.md
---
---

# Reactivity API

|                              | <logos-react class="text-5xl"/> | <logos-vue class="text-5xl"/> | <logos-solidjs-icon class="text-5xl"/> | <logos-preact class="text-5xl"/> | <logos-angular-icon class="text-5xl"/> | <logos-svelte-icon class="text-5xl"/> |
| -----------------------------| ------------------------------- | ----------------------------- | -------------------------------------- | -------------------------------- | -------------------------------------- | ------------------------------------- |
| State                        | `useState`                      | `ref`/`reactive`              | `createSignal`                         | `signal`                         | `signal`                               | `$state`                              |
| Computed                     | `useMemo`                       | `computed`                    | `() => `                               | `computed`                       | `computed`                             | `$derived`                            |
| Effect                       | `useEffect`                     | `watchEffect`                 | `createEffect`                         | `effect`                         | `effect`                               | `$effect`                             |

<style>
table {
  scale: 0.9;
  translate: -46px 0;
}
</style>

<!--
Sje så likt det e da! Koffer driv vi med, "vi må velg rammeverk X fordi det e kun det folk har erfaring med" osv... 
Hvis man kan nå i et rammeverk, klarer man det i et anna.
Men det er jo mer te et rammeverk enn kun reactivity, ska sies.
-->

---

# Reactivity table

|                              | <logos-react class="text-5xl"/>                | <logos-vue class="text-5xl"/>                       | <logos-solidjs-icon class="text-5xl"/>               | <logos-preact class="text-5xl"/>                     | <logos-angular-icon class="text-5xl"/>              | <logos-svelte-icon class="text-5xl"/>                |
| -----------------------------| ---------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------- |
| mutable vs immutable API     | Immutable                                      | Mutable                                             | Immutable                                            | Mutable                                              | Immutable                                           | Mutable                                              |
| State is always in sync      | <emojione-cross-mark-button class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/>  | <emojione-white-heavy-check-mark class="text-2xl"/>  | <emojione-white-heavy-check-mark class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/>  |
| Re-render                    | <noto-deciduous-tree class="text-2xl"/>        | <openmoji-puzzle-piece class="text-3xl"/>           | <material-symbols-jump-to-element class="text-3xl"/> | <material-symbols-jump-to-element class="text-3xl"/> | <noto-deciduous-tree class="text-2xl"/>             | <material-symbols-jump-to-element class="text-3xl"/> |
| Works outside the component  | <emojione-cross-mark-button class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/>  | <emojione-white-heavy-check-mark class="text-2xl"/>  | <openmoji-palm-down-hand class="text-2xl"/>(2/3)    | <emojione-white-heavy-check-mark class="text-2xl"/>  |
| Works outside the framework  | <emojione-cross-mark-button class="text-2xl"/> | <emojione-white-heavy-check-mark class="text-2xl"/> | <openmoji-palm-down-hand class="text-2xl"/>          | <emojione-white-heavy-check-mark class="text-2xl"/>  | <openmoji-palm-down-hand class="text-2xl"/>(2/3)    | <emojione-cross-mark-button class="text-2xl"/>       |

---
layout: center
---

# Takk for mæ!