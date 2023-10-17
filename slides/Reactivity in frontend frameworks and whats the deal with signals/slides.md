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

TODO: Tidslinje

---

# React

- Hooks 2019, v16.8

<logos-react class="text-9xl scale-200 translate-x-3em translate-y-60px" />

---

```jsx {monaco}
import { useState } from 'react'

export function Component() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Count: { count }</p>
      <button onClick={() => setCount(count + 1)}>Bump</button>
    </>
  )
}
```

---

# React oppsumert

- State = `useState`
- Beregnet state = direkte utregning / `useMemo`
- Effekter = `useEffect`

---

TODO react utfylling

---

# Vue

- Composition API 2020, v3

<logos-vue class="text-9xl scale-200 translate-x-3em translate-y-60px" />

---

 
```html {monaco}
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="count++">Bump</button>
</template>
```

---

# Vue oppsumert

- State = `ref` / `reactive`
- Beregnet state = `computed`
- Effekter = `watchEffect`

---

TODO vue utfylling

---

# Hva er greia med signals?

---

# Solid

- Signals 2021, v1

<logos-solidjs-icon class="text-9xl scale-200 translate-x-3em translate-y-60px" />

---

 
```jsx {monaco}
import { createSignal } from 'solid-js'

export function Component() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <p>Count: { count() }</p>
      <button onClick={() => setCount(count() + 1)}>Bump</button>
    </>
  )
}
```

---

# Solid oppsumert

- State = `createSignal`
- Beregnet state = funksjoner som bruker signals
- Effekter = `createEffect`

---

TODO solid utfylling

---

# Preact

- Signals 2022, @preact/signals

<logos-preact class="text-9xl scale-200 translate-x-3em translate-y-60px" />

---

 
```jsx {monaco}
import { signal } from '@preact/signals'

export function Component() {
  const count = signal(0)

  return (
    <>
      <p>Count: { count }</p>
      <button onClick={() => count.value++}>Bump</button>
    </>
  )
}
```

---

# Preact oppsumert

- State = `signal`
- Beregnet state = `computed`
- Effekter = `effect`

---

TODO preact utfylling

---

# Qwik

- Signals 2023, v1

<logos-qwik class="text-9xl scale-200 translate-x-3em translate-y-60px" />

---

 
```jsx {monaco}
import { component$, useSignal } from '@builder.io/qwik'

export default component$(() => {
  const count = useSignal(0)

  return (
    <>
      <p>Count: { count.value }</p>
      <button onClick$={() => count.value++}>Bump</button>
    </>
  )
})
```

---

# Qwik oppsumert

- State = `useSignal` / `useStore`
- Beregnet state = `useComputed$`
- Effekter = `useTask$`

---

TODO Qwik utfylling