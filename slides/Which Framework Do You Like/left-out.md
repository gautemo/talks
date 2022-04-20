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

<Vote title="Global state" votekey="global"/>