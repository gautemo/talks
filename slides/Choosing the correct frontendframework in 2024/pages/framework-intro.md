# React

- Av Facebook / Meta
- Oppstod 2013
- Dagens versjon v18
- 2019 React hooks

---

## React komponent

```jsx
function Counter() {
  const [count, setCount] = useState(0)
  
  function increment() {
    setCount(count + 1)
  }

  return (
    <>
      <span>Count is {count}</span>
      <button onClick={increment}>Bump</button>
    </>
  );
}
```

---

# Angular

- Av Google
- AngularJS oppstod 2010
- Angular oppstod 2016
- Dagens versjon v17
- 2023 signals & control flow

---

## Angular data

```ts
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = signal(0)
  increment(){
    this.count.set(this.count() + 1)
  }
}
```

```html
<span>Count is {{count}}</span>
<button (click)="increment()">Bump</button>
```

---

# Vue

- Av Evan You
- Oppstod 2014
- Fulltidsprosjekt siden 2016
- Dagens versjon v3
- Progressive framework
- Eneste uavhengige populære rammeverk
- 2020 Composition API

---

## Vue komponent

```vue
<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <span>Count is {{count}}</span>
  <button @click="count++">Bump</button>
</template>

<style scoped>
</style>
```

---

# Vue bidrar økosystemet bidrar utover

<logos-vitejs class="text-6xl translate-x-20 translate-y-30"/>
<logos-react class="text-3xl translate-x--15 translate-y-10"/>
<logos-remix-icon class="bg-white text-3xl"/>
<logos-angular-icon class="text-3xl translate-x-12 translate-y-5"/>
<logos-solidjs-icon class="text-3xl translate-x--45 translate-y-37"/>
<logos-preact class="text-3xl translate-y-23"/>
<logos-svelte-icon class="text-3xl translate-x--10 translate-y-40"/>
<logos-qwik-icon class="text-3xl translate-x--35 translate-y-50"/>
<logos-lit-icon class="text-3xl translate-x--65 translate-y-50"/>
<Arrow x1="130" y1="220" x2="100" y2="200" />
<Arrow x1="180" y1="215" x2="180" y2="180" />
<Arrow x1="215" y1="215" x2="245" y2="190" />
<Arrow x1="215" y1="245" x2="265" y2="245" />
<Arrow x1="210" y1="270" x2="265" y2="295" />
<Arrow x1="185" y1="290" x2="210" y2="320" />
<Arrow x1="160" y1="290" x2="150" y2="320" />
<Arrow x1="140" y1="270" x2="100" y2="285" />

<img src="/volar.svg" class="h-18 translate-x-90 translate-y-15"/>
<logos-astro-icon class="bg-white text-3xl translate-x-80 translate-y-25"/>
<logos-mdx class="text-4xl translate-x-100 translate-y-25"/>
<Arrow x1="430" y1="300" x2="400" y2="340" />
<Arrow x1="470" y1="300" x2="500" y2="340" />

<img src="/nitro.svg" class="h-18 translate-x-150 translate-y--15"/>
<img src="/solidstart.svg" class="h-10 translate-x-140"/>
<logos-analog class="text-3xl translate-x-165 translate-y--10"/>
<Arrow x1="670" y1="300" x2="650" y2="350" />
<Arrow x1="720" y1="300" x2="730" y2="350" />

---

# Svelte

- Av Rich Harris
- Oppstod 2016
- Dagens versjon v4
- Compiler
- 202x Runes

---

## Svelte komponent

````md magic-move
```svelte
<script lang="ts">
let count = 0
</script>

<span>Count is {count}</span>
<button on:click={() => count++}>Bump</button>

<style>
</style>
```
```svelte
<script lang="ts">
let count = $state(0)
</script>

<span>Count is {count}</span>
<button on:click={() => count++}>Bump</button>

<style>
</style>
```
````

---

## Preact

- Av Jason Miller
- Oppstod 2016
- Dagens versjon v10
- Et mindre og raskere React
- 2022 Signals

---

## Preact komponent

```jsx
function Counter() {
  const [count, setCount] = useState(0)
  
  function increment() {
    setCount(count + 1)
  }

  return (
    <>
      <span>Count is {count}</span>
      <button onClick={increment}>Bump</button>
    </>
  );
}
```

---

## Solid

- Av Ryan Carniato
- Oppstod 2018
- Versjon 1 i 2021
- Dagens versjon v1
- Fine grained reactivity

---

## Solid komponent

```jsx
function Counter() {
  const [count, setCount] = createSignal(0)
  
  function increment() {
    setCount(count() + 1)
  }

  return (
    <>
      <span>Count is {count()}</span>
      <button onClick={increment}>Bump</button>
    </>
  );
}
```