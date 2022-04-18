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

# Men først, hvorfor trenger du et frontend rammeverk?

---

# Smertepunkter

```html{all|11}
<body>
  <div id="app">
    <h1>My Vanilla ToDo</h1>
    <section>
      <label>
        What to do?
        <input type="text" id="todo-input"/>
      </label>
      <button id="todo-add" disabled>Add</button>
    </section>
    <ul></ul>
    <button id="dark-switch"></button>
  </div>
  <script type="module" src="/main.js"></script>
  <script type="module" src="/darkMode.js"></script>
</body>
```

---

# Smertepunkter

##### Oppbygging av dynamisk HTML

```js{2-10}
function addTodo(){
  const li = document.createElement('li')
  const span = document.createElement('span')
  span.innerText = input.value
  const close = document.createElement('button')
  close.innerText = 'x'
  li.appendChild(span)
  li.appendChild(close)
  list.appendChild(li)
  close.addEventListener('click', () => list.removeChild(li))
  input.value = ''
  handleDisableButton()
}
```

---

# Smertepunkter

##### Oppbygging av dynamisk HTML

```js{5,9}
function setDarkMode(){
  if(isDark){
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'on')
    darkSwitch.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M128 60a68 68 0 1 0 68 68a68.1 68.1 0 0 0-68-68Zm0 120a52 52 0 1 1 52-52a52 52 0 0 1-52 52Zm-8-144V16a8 8 0 0 1 16 0v20a8 8 0 0 1-16 0ZM43.1 54.5a8.1 8.1 0 1 1 11.4-11.4l14.1 14.2a8 8 0 0 1 0 11.3a8.1 8.1 0 0 1-11.3 0ZM36 136H16a8 8 0 0 1 0-16h20a8 8 0 0 1 0 16Zm32.6 51.4a8 8 0 0 1 0 11.3l-14.1 14.2a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3a8.1 8.1 0 0 1 0-11.4l14.2-14.1a8 8 0 0 1 11.3 0ZM136 220v20a8 8 0 0 1-16 0v-20a8 8 0 0 1 16 0Zm76.9-18.5a8.1 8.1 0 0 1 0 11.4a8.5 8.5 0 0 1-5.7 2.3a8.3 8.3 0 0 1-5.7-2.3l-14.1-14.2a8 8 0 0 1 11.3-11.3ZM248 128a8 8 0 0 1-8 8h-20a8 8 0 0 1 0-16h20a8 8 0 0 1 8 8Zm-60.6-59.4a8 8 0 0 1 0-11.3l14.1-14.2a8.1 8.1 0 0 1 11.4 11.4l-14.2 14.1a8.1 8.1 0 0 1-11.3 0Z"></path></svg>`
  }else{
    document.documentElement.classList.remove('dark')
    localStorage.removeItem('darkMode')
    darkSwitch.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M224.3 150.3a8.1 8.1 0 0 0-7.8-5.7l-2.2.4A84 84 0 0 1 111 41.6a5.7 5.7 0 0 0 .3-1.8a7.9 7.9 0 0 0-10.3-8.1a100 100 0 1 0 123.3 123.2a7.2 7.2 0 0 0 0-4.6ZM128 212A84 84 0 0 1 92.8 51.7a99.9 99.9 0 0 0 111.5 111.5A84.4 84.4 0 0 1 128 212Z"></path></svg>`
  }
}
```

---

# Smertepunkter

```js{1,3,5|4,6-11|11,13-15,19}
const list = document.querySelector('ul')

const addButton = document.querySelector('#todo-add')
addButton.addEventListener('click', addTodo)
const input = document.querySelector('#todo-input')
input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    addTodo()
  }
})
input.addEventListener('input', handleDisableButton)

function handleDisableButton(){
  addButton.disabled = !input.value
}

function addTodo(){
  // ...
  handleDisableButton()
}
```

---

# Smertepunkter

### State

- Ligger i DOM
  - eller
- Synce med DOM selv

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

- Public release 2013
- Current release v18
- Av Facebook / Meta
- ~~Library~~
- Virtual DOM
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
  let count = 0
  
  return (
    <>
      <span>Count is {count}</span>
      <button onClick={() => count++}>Bump</button>
    </>
  );
}
```

<span class="text-5xl">🙅</span>

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

- Ikke AngularJS
- Initial release 2016
- Current release v13
- Av Google
- TypeScript only
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

- Initial release 2013
- Av Evan You
- Full time siden 2016
- Virtual DOM
- Progressive framework
- 2020 Composition API

---

## Vue komponent

```vue
<script setup lang="ts">
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

- Initial release 2016
- Av Rich Harris
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

```svelte
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

---

# Conditional rendering - else

<section class="options">

<div>
Short circuit

```jsx
{day ? (
  <p>☀️</p>
) : (
  <p>🌑</p>
)}
```

</div>
<div>
Directive - Angular

```html
<p *ngIf="day; else night">☀️</p>
<ng-template #night>
  <p>🌑</p>
</ng-template>
```

</div>
<div>
Directive - Vue

```html
<p v-if="day">☀️</p>
<p v-else>🌑</p>
```

</div>
<div>
Svelte syntax

```svelte
{#if day}
	<p>☀️</p>
{:else}
	<p>🌑</p>
{/if}
```

</div>
</section>

<Voting :index="5" votekey="ifelse"/>

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

# State - primitive verdier

<section class="options grid">

<div>
React

```jsx
const [count, setCount] = useState(0)
const bump = () => setCount(count + 1)
```

</div>
<div>
Angular

```ts
class MyComponent {
  count = 0
  bump(){
    this.count++
  }
}
```

</div>
<div>
Vue

```js
const count = ref(0)
const bump = () => count.value++
```

</div>
<div>
Svelte

```js
let count = 0
const bump = () => count++
```

</div>
</section>

<Voting :index="7" votekey="state"/>

---

# State - objekter

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

<Voting :index="8" votekey="stateobject"/>

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

# Global state

<section class="options">

<div>
React

```jsx
export const StoreContext = createContext()

export function StoreProvider({ children }) {
  const [todos, setTodos] = useState([])
  return (
    <StoreContext.Provider value={{todos, setTodos}}>
      {children}
    </StoreContext.Provider>
  )
}
```
```jsx
import { StoreContext } from './StoreProvider'

export function DeleteTodos() {
  const { todos, setTodos } = useContext(StoreContext);
  return (
    <button onClick={() => setTodos([])}>
      Delete {todos.length} todos
    </button>
  )
}
```

</div>

</section>
<Voting :index="9" votekey="global"/>

<style>
  h1{ 
    position: absolute;
  }
</style>

---

# Global state

<section class="options">
<div>
Angular

```ts
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  todos = new BehaviorSubject<string[]>([])
}
```
```ts
@Component({
  selector: 'app-delete-todos',
  templateUrl: './delete-todos.component.html',
  styleUrls: ['./delete-todos.component.css']
})
export class DeleteTodosComponent {
  constructor(private storeService: StoreService) {}

  deleteTodos(){
    this.storeService.todos.next([])
  }
}
```
```html
<button (click)="deleteTodos()">
  Delete {{storeService.todos.length}} todos
</button>
```

</div>
</section>
<Voting :index="9" votekey="global"/>


<style>
  h1{ 
    margin-bottom: -80px !important;
  }
</style>

---

# Global state

<section class="options">
<div>
Vue

```js
export const store = reactive({
  todos: []
})
```
```vue
<script setup>
import { store } from './store'
</script>

<template>
  <button @click="store.todos = []">
    Delete {{store.todos.length}} todos
  </button>
</template>
```

</div>
<div>
Svelte

```js
export const store = writable({
  todos: []
});
```
```svelte
import { store } from "./store";

<button on:click={() => $store.todos = []}>
  Delete {$store.todos.length} todos
</button>
```

</div>
</section>

<Voting :index="9" votekey="global"/>

---

props
events up
lifecycle
watch effect