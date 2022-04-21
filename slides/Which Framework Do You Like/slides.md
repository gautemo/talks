---
theme: default
routerMode: hash
highlighter: shiki
info: |
  ## Which Framework Do You Like
  By [Gaute Meek Olsen](https://twitter.com/GauteMeekOlsen)
drawings:
  persist: false
---

# Hvilket frontend rammeverk liker du...

<h2 v-click>sånn egentlig?</h2>

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

# Hva er et frontend rammeverk?

<ul v-click>
  <li>Abstraksjon</li>
  <li>Oppsett/struktur for å lage HTML, JS og CSS</li>
  <li>Lar deg utvikle UI komponenter</li>
  <li>Holder på data</li>
  <li>Reaktiv UI basert på data</li>
</ul>

---
  
<BarChart title="State of JS 21 - Usage" postfix="%" :bars="[
  { name: 'React', points: 80 }, 
  { name: 'Vue', points: 51 }, 
  { name: 'Angular', points: 54 },
  { name: 'Svelte', points: 20 },
  { name: 'Preact', points: 14 },
  { name: 'Ember', points: 9 },
  { name: 'Lit', points: 7 },
  { name: 'Alpine', points: 6 },
  { name: 'Solid', points: 3 },
  { name: 'Stimulus', points: 2 },
  ]"/>

---

<BarChart title="NPM Installs Weekly" :bars="[
  { name: 'React', points: 15_200_000 }, 
  { name: 'Vue', points: 3_100_000 }, 
  { name: 'Angular', points: 2_900_000 },
  { name: 'Svelte', points: 260_000 },
  { name: 'Preact', points: 1_100_000 },
  { name: 'Ember', points: 3_700 },
  { name: 'Lit', points: 120_000 },
  { name: 'Alpine', points: 86_000 },
  { name: 'Solid', points: 17_000 },
  { name: 'Stimulus', points: 157_000 },
  ]"/>

---

<BarChart title="GitHub Stars" :bars="[
  { name: 'React', points: 184_000 }, 
  { name: 'Vue', points: 194_000 }, 
  { name: 'Angular', points: 80_000 },
  { name: 'Svelte', points: 57_000 },
  { name: 'Preact', points: 31_000 },
  { name: 'Ember', points: 22_000 },
  { name: 'Lit', points: 11_000 },
  { name: 'Alpine', points: 20_000 },
  { name: 'Solid', points: 16_000 },
  { name: 'Stimulus', points: 11_000 },
  ]"/>


---

<BarChart title="Developer Tools Extension Installs" :bars="[
  { name: 'React', points: 140_000+3_000_000 }, 
  { name: 'Vue', points: 90_000+1_200_000 }, 
  { name: 'Angular', points: 100_000 },
  { name: 'Svelte', points: 2_000+10_000 },
  { name: 'Preact', points: 1_000+6_000 },
  { name: 'Ember', points: 2_000+40_000 },
  { name: 'Alpine', points: 1_000+9_000 },
  ]"/>

---

<BarChart title="Stackoverflow Watchers" :bars="[
  { name: 'React', points: 309_000 }, 
  { name: 'Vue', points: 84_200 }, 
  { name: 'Angular', points: 178_000 },
  { name: 'Svelte', points: 2_300 },
  { name: 'Preact', points: 225 },
  { name: 'Ember', points: 5_100 },
  { name: 'Lit', points: 49 },
  { name: 'Alpine', points: 232 },
  { name: 'Solid', points: 26 },
  { name: 'Stimulus', points: 119 },
  ]"/>

---

<BarChart title="Slått sammen" postfix="%" :bars="[
  { name: 'React', points: Number(([32.5,66.2,29.4,68.2,53.3].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Vue', points: Number(([20.7,13.5,31,28,14.5].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Angular', points: Number(([22,12.6,12.8,2.2,30.7].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Svelte', points: Number(([8.1,1.1,9.1,0.3,0.4].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Preact', points: Number(([5.7,4.8,5,0.2,0].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Ember', points: Number(([3.7,0,3.5,0.9,0.9].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Lit', points: Number(([2.8,0.5,1.8,0,0].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Alpine', points: Number(([2.4,0.4,3.2,0.2,0].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Solid', points: Number(([1.2,0.1,2.6,0,0].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Stimulus', points: Number(([0.8,0.7,1.8,0,0].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  ]"/>

---

## Bli med å gi din stemme

<div class="center">
  <img src="/qr-vote.png" alt="QR code"/>
  <a href="https://gaute-talks.netlify.app/which-framework-do-you-like-voting/" target="_blank">https://gaute-talks.netlify.app/which-framework-do-you-like-voting/</a>
  <Ready/>
</div>

<style>
  img{
    border-radius: 15px;
    height: 35%;
    width: 35%;
  }

  .center{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    gap: 15px;
  }
</style>

---

# Hvilken foretrekker du?

<section class="options">
  <div><logos-react class="text-9xl"/></div>
  <div><logos-angular-icon class="text-9xl"/></div>
  <div><logos-vue class="text-9xl"/></div>
  <div><logos-svelte-icon class="text-9xl"/></div>
  <div><mdi-head-question-outline class="text-9xl"/></div>
</section>
<Voting :index="1" votekey="prefers"/>

---

<Vote title="Hvilken foretrekker du?" votekey="prefers"/>

---

# React

- Av Facebook / Meta
- Public release 2013
- Current release v18
- ~~Library~~
- 2019 React hooks

---

## React komponent

```jsx
export function MyButton() {
  return (
    <button>Click me</button>
  );
}
```

---

## React komponent

```jsx{1,6}
import { MyButton } from './MyButton'

function MyApp() {
  return (
    <div>
      <MyButton />
    </div>
  );
}
```

---

## React data

```jsx
function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <span>Count is {count}</span>
      <button onClick={() => setCount(count + 1)}>Bump</button>
    </>
  );
}
```

---

# Angular

- Av Google
- Ikke AngularJS
- Initial release 2016
- Current release v13
- Decorators
- Dependency injection

---

## Angular komponent

*my-button.component.ts*:
```ts
@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {
  constructor() {}
}
```

**my-button.component.html**:
```html
<button>Click me</button>
```

---

## Angular komponent

*app.module.ts*:
```ts{4}
@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

*html fil*:
```html
<div>
  <app-my-button></app-my-button>
</div>
```

---

## Angular data

```ts
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  count = 0
  increment(){
    this.count++
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
- Initial release 2013
- Full time siden 2016
- Progressive framework
- 2020 Composition API

---

## Vue komponent

```vue
<script lang="ts">
</script>

<template>
  <button>Click me</button>
</template>

<style scoped>
button {
  cursor: pointer;
}
</style>
```

---

## Vue komponent

```vue{2,7}
<script setup lang="ts">
import MyButton from './MyButton.vue'
</script>

<template>
  <div>
    <MyButton/>
  </div>
</template>
```

---

## Vue data

```vue
<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <span>Count is {{count}}</span>
  <button @click="count++">Bump</button>
</template>
```

---

# Svelte

- Av Rich Harris
- Initial release 2016
- Compiler

---

## Svelte komponent

```svelte
<script lang="ts">
</script>

<button>Click me</button>

<style>
button {
  cursor: pointer;
}
</style>
```

---

## Svelte komponent

```svelte{2,6}
<script lang="ts">
import MyButton from './MyButton.svelte'
</script>

<div>
  <MyButton/>
</div>
```

---

## Svelte data

```svelte
<script lang="ts">
let count = 0
</script>

<template>
  <span>Count is {count}</span>
  <button on:click={() => count++}>Bump</button>
</template>
```

---

# Hva er viktig for et framework?

* Utvikler opplevelse
* Performance
* Økosystem

---
layout: center
---

# Utivkler opplevelse - 💯 poeng

---

# JavaScript eller TypeScript?

<section class="options">
  <div><logos-javascript class="text-9xl"/></div>
  <div><logos-typescript-icon class="text-9xl"/></div>
</section>
<Voting :index="2" votekey="language"/>

---

<Vote title="JavaScript eller TypeScript?" votekey="language"/>

---

# Template

<section class="options">

<div>
JSX

```jsx
function MyComponent() {
  const world = 'CapraCon'
  return (
    <>
      <h1>Hello {world}</h1>
      <p>Do you like JSX?</p>
    </>
  );
}
```

</div>
<div>
HTML

```html
<h1>Hello {{world}}</h1>
<p>Do you like HTML?</p>
```

</div>
<div>
Single File Comonent

```svelte
<script>
const world = 'CapraCon'
</script>

<h1>Hello {world}</h1>
<p>Do you like SFC?</p>

<style></style>
```

</div>
</section>

<Voting :index="3" votekey="template"/>

---

<Vote title="Template" votekey="template"/>

---

# Conditional rendering

<section class="options">

<div>
Short circuit

```jsx
{ day && <p>☀️</p> }
```

</div>
<div>
Directive

```html
<p v-if="day">☀️</p>
```

</div>
<div>
Svelte syntax

```svelte
{#if day}
  <p>☀️</p>
{/if}
```

</div>
</section>

<Voting :index="4" votekey="if"/>

---

<Vote title="Conditional rendering" votekey="if"/>

---

# Liste

<section class="options grid">

<div>
React

```jsx
<ul>
  {todos.map(todo => 
    <li key={todo.id}>{todo.text}</li>
  )}
</ul >
```

</div>
<div>
Angular

```html
<ul>
  <li
    *ngFor="let todo of todos; trackBy: trackByFn" 
  >{{todo.text}}</li>
</ul>
```

</div>
<div>
Vue

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{todo.text}}</li>
</ul>
```

</div>
<div>
Svelte

```svelte
<ul>
  {#each todos as todo (todo.id)}
    <li>{todo}</li>
  {/each}
</ul>
```

</div>
</section>

<Voting :index="6" votekey="list"/>

---

<Vote title="Liste" votekey="list"/>

---

# State

<section class="options grid">

<div>
React

```jsx
const [position, setPosition] = useState({ x: 0, y: 0 })
const moveX = (x) => setPosition({...position, x: x})
```

</div>
<div>
Angular

```ts
class MyComponent {
  position = { x: 0, y: 0 }
  moveX(x: number){
    this.position.x = x
  }
}
```

</div>
<div>
Vue

```js
const position = reactive({ x: 0, y: 0 })
const moveX = (x) => position.x = x
```

</div>
<div>
Svelte

```js
const position = { x: 0, y: 0 }
const moveX = (x) => position.x = x
```

</div>
</section>

<Voting :index="8" votekey="state"/>

---

<Vote title="State" votekey="state"/>

---

# Beregnet verdi

<section class="options grid">

<div>
React

```jsx
const [count, setCount] = useState(0)
const double = count * 2
```

</div>
<div>
Angular

```ts
class MyComponent {
  count = 0
  double(){
    return this.count * 2
  }
}
```

</div>
<div>
Vue

```js
const count = ref(0)
const double = computed(() => count.value * 2)
```

</div>
<div>
Svelte

```js
let count = 0
$: double = count * 2
```

</div>
</section>

<Voting :index="9" votekey="computed"/>

---

<Vote title="Beregnet verdi" votekey="computed"/>

---

# Props

<section class="options grid">

<div>
React

```jsx
function MyComponent(props: { count: number }){
  return <p>Count: {props.count}</p>
}
```
```jsx
<MyComponent count={count}>
```

</div>
<div>
Angular

```ts
class MyComponent {
  @Input() count!: number
}
```
```html
<app-my-component [count]="count"></app-my-component>
```

</div>
<div>
Vue

```vue
<script setup lang="ts">
defineProps<{
  count: number
}>()
</script>
<template>
  <p>Count: {{count}}</p>
</template>
```
```html
<MyComponent :count="count"/>
```

</div>
<div>
Svelte

```svelte
<script lang="ts">
export let count: number
</script>
<p>Count: {count}</p>
```
```html
<MyComponent {count}/>
```

</div>
</section>

<Voting :index="10" votekey="props"/>

---

<Vote title="Props" votekey="props"/>

---

### Spør meg senere om 🕙

- Global state
- Watchers/side effects
- Lifecycle methods

---

# Utivkler opplevelse 

<DX/>

---
layout: center
---

# Performance - 💯 poeng

---

# App size

|           | Vue     | Svelte | React   | Angular
| --------- | ------- | ------ | ------- | --------
| Component | 1.45kb  | 2.31kb | 1.56kb  | 1.68kB  
| Vendor    | 18.10kb | 1.54kb | 38.55kb | 41.74kB 

---

# App size

<div class="center">
  <img src="/chart.png" alt="App size chart"/>
</div>

<style>
  img{
    height: 80%;
    width: 80%;
  }

  .center{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    gap: 15px;
  }
</style>
---

# App size

| Komponenter | Vue   | Svelte | React | Angular
| ----------- | ----- | ------ | ----- | --------
| 10          | 6 🏅  | 10 🏅 |       |    
| 50          | 10 🏅 | 3 🏅  | 3 🏅 |   
| 200         | 10 🏅 |       | 4 🏅  | 2 🏅

---

# App performance

[js-framework-benchmark](https://krausest.github.io/js-framework-benchmark/current.html)
---

# App performance

|                   | Vue    | Svelte | React | Angular
| ----------------- | ------ | ------ | ----- | --------
| Data changes      | 10 🏅 | 8 🏅   |       | 
| Startup           | 6 🏅  | 9 🏅   | 2 🏅  |   
| Memory allocation | 6 🏅  | 10 🏅  | 1 🏅  | 

---
layout: center
---

# Økosystem - 💯 poeng

---

<BarChart title="Slått sammen" postfix="%" :bars="[
  { name: 'React', points: Number(([32.5,66.2,29.4,68.2,53.3].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Vue', points: Number(([20.7,13.5,31,28,14.5].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Angular', points: Number(([22,12.6,12.8,2.2,30.7].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
  { name: 'Svelte', points: Number(([8.1,1.1,9.1,0.3,0.4].reduce((acc, p) => acc + p, 0)/5).toFixed(1)) },
]"/>

|         | Poeng
| ------- | -----  
| React   | 20 🏅  
| Vue     | 9 🏅   
| Angular | 6 🏅   
| Svelte  | 2 🏅   

---

# Metaframework

|         | Metaframework                                                                              | Poeng
| ------- | -------------------------------------------------------------------------------------------| ------
| React   | <logos-astro/> <logos-nextjs/> <logos-remix-icon/> <logos-gatsby/> <logos-docusaurus/> +5  | 30 🏅
| Vue     | <logos-astro/> <logos-nuxt-icon/> <logos-gridsome-icon/> +3                                | 18🏅
| Svelte  | <logos-astro/> <logos-svelte-icon/> +1                                                     | 9🏅
| Angular | <logos-angular-icon/> +1                                                                   | 6🏅

<style>
  svg, img{
    height: 40px;
    width: 40px;
    background: #87878773;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;
  }
</style>

<!--
React: Astro, Next.js, Remix, Umi, Blitz, After.js, Fusion.js | Gatsby, Docusaurus, React Static
Vue: Astro, Nuxt, Factor, VitePress, Gridsome, Saber
Angular: Scully, Angular Universal
Svelte: Astro, SvelteKit, Elder.js
-->

---

<Winner/>

---

## Slides

- [gaute-talks.netlify.app](https://gaute-talks.netlify.app/which-framework-do-you-like/index.html)

## Kilder

- [frontend-framework-compare](https://github.com/gautemo/frontend-framework-compare)
- [GitHub stars](https://bestofjs.org/projects?tags=framework)
- [js-framework-benchmark](https://krausest.github.io/js-framework-benchmark/current.html)
- [frontend-framework-size-analysis](https://github.com/gautemo/frontend-framework-size-analysis)
- [Metaframeworks SSG](https://bestofjs.org/projects?tags=ssg)
- [Metaframeworks SSR](https://bestofjs.org/projects?tags=nodejs-framework)

