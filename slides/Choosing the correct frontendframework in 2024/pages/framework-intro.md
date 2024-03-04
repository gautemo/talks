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