---
theme: default
title: How I built Kuizzi
info: |
  ## How I built Kuizzi
  By [Gaute Meek Olsen](https://twitter.com/GauteMeekOlsen)
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
---

# How I built Kuizzi

A real-time quiz webapp

<div class="abs-br m-6 flex gap-2">
  <a href="https://twitter.com/GauteMeekOlsen" target="_blank" alt="GitHub" title="Follow me on Twitter"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-twitter />
  </a>
  <a href="https://github.com/gautemo/kuizzi" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: center
---

<img src="/kuizzi.png" alt="Kuizzi question" class="scale-75">

---

# Background

<v-clicks>

- April 2020, my turn to host the team quiz
- Kahoot needs 💰
- Gaute thinks "Why not just built it myself?"
- Extra features
  - GIFs ![Thumbs up](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDAxZ3ZjYzV4b2EwdHRuNDVseGlpZXRpcndseTM1d21wdHJzOHg4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/111ebonMs90YLu/giphy.gif)
  - Custom player icon
  - Question text on your own device
- Playing with Vue 3 (`3.0.0-alpha.10`)

</v-clicks>

---

# Tech stack

<div class="translate-x-60 translate-y-30">
  <logos-vue class="text-size-9xl"/>
  <logos-firebase class="text-size-9xl"/>
</div>

---

# Vue crash course

```html
<div id="app">
  <button @click="count++">{{count}}</button>
</div>

<script type="module">
  import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    setup() {
      const count = ref(0)
      return {
        count
      }
    }
  }).mount('#app')
</script>
```

<Counter :styled="false"/>

---

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">{{count}}</button>
</template>
```

<Counter :styled="false"/>

---

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">{{count}}</button>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  background-image: linear-gradient(#e242f9, #4f93f9);
}
</style>
```

<Counter :styled="true"/>

---

````md magic-move

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">{{count}}</button>
</template>
```

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const increase = () => count.value++
</script>

<template>
  <button @click="increase">{{count}}</button>
</template>
```

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const increase = () => count.value++
</script>

<template>
  <button @click="increase">{{count}}</button>
  <p v-if="count > 5">Count is big!!!</p>
</template>
```

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
```

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)
</script>
```

```vue
<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)
watchEffect(() => console.log(count.value))
</script>
```

````

---

store.ts:
```ts
import { ref } from 'vue'

const count = ref(0)
```

Component.vue:
```vue
<script setup lang="ts">
import { count } from './store.ts'
</script>
```

---

# Firebase crash course

Firebase is Google’s application development platform that helps you build, improve, and grow your app.

<img v-click src="/firebase.png" alt="Firebase products">

---

<img src="/firebase-using.png" alt="Firebase products used">

---

```js
import { doc, onSnapshot } from "firebase/firestore"

const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
  console.log("Current data: ", doc.data())
})
```

---

# Let's look at some code!

![Firebase](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWM4MnM2ZGNocG04bzB0MnByZWk0a3JnMGw1NjgxNWp0OW1nZTI5dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nP8SZtRxihoTZ6W90N/giphy.gif)