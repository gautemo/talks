# Signals?

```js
const vue = ref(0)
const [solid, setSolid] = createSignal(0)
const preactOrAngular = signal(0)
const svelte = $state(0)
```

---
layout: center
transition: fade
---

# Signals under panseret

```mermaid { scale: 1.5 }
graph TD;
    A[count=1]---B[double=count * 2];
    A---C["console.log(count)"];
    A---D["&lt;p&gt;count is 1&lt;/p&gt;"];
    B---E["&lt;p&gt;double is 2&lt;/p&gt;"];
```

---
layout: center
transition: fade
---

# Signals under panseret

```mermaid { scale: 1.5 }
graph TD;
    A[count=2]==>B[double=count * 2];
    A==>C["console.log(count)"];
    A==>D["&lt;p&gt;count is 1&lt;/p&gt;"];
    B---E["&lt;p&gt;double is 2&lt;/p&gt;"];
    style A stroke:#ff0000
    linkStyle 0,1,2 stroke:#ff0000,color:red;
```

---
layout: center
transition: fade
---

# Signals under panseret

```mermaid { scale: 1.5 }
graph TD;
    A[count=2]===B[double=count * 2];
    A===C["console.log(count)"];
    A===D["&lt;p&gt;count is 2&lt;/p&gt;"];
    B---E["&lt;p&gt;double is 2&lt;/p&gt;"];
    linkStyle 0,1,2 stroke:#ff0000,color:red;
    style B stroke:#ff0000
    style C stroke:#ff0000
    style D stroke:#ff0000
```

---
layout: center
transition: fade
---

# Signals under panseret

```mermaid { scale: 1.5 }
graph TD;
    A[count=2]---B[double=count * 2];
    A---C["console.log(count)"];
    A---D["&lt;p&gt;count is 1&lt;/p&gt;"];
    B==>E["&lt;p&gt;double is 2&lt;/p&gt;"];
    style B stroke:#ff0000
    linkStyle 3 stroke:#ff0000,color:red;
```

---
layout: center
---

# Signals under panseret

```mermaid { scale: 1.5 }
graph TD;
    A[count=2]---B[double=count * 2];
    A---C["console.log(count)"];
    A---D["&lt;p&gt;count is 2&lt;/p&gt;"];
    B===E["&lt;p&gt;double is 4&lt;/p&gt;"];
    linkStyle 3 stroke:#ff0000,color:red;
    style E stroke:#ff0000
```

---

# Signals fordeler

- Mer effektiv DOM oppdatering
- Frikoblet fra komponent

````md magic-move
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
```jsx
const [count, setCount] = createSignal(0)
function increment() {
  setCount(count() + 1)
}

function Counter() {
  return (
    <>
      <span>Count is {count()}</span>
      <button onClick={increment}>Bump</button>
    </>
  );
}
```
```jsx
import { count, increment } from './store.ts'

function Counter() {
  return (
    <>
      <span>Count is {count()}</span>
      <button onClick={increment}>Bump</button>
    </>
  );
}
```
````

---

# Signals?

<section class="options">

<div>
Re-run med dependency arrays

```jsx
const [count, setCount] = useState(0)

useEffect(() => {
  console.log(count)
}, [count])
```

<section v-click="1">
  <logos-react/>
</section>
</div>
<div>
Signal

```jsx
const [count, setCount] = createSignal(0)

createEffect(() => {
  console.log(count())
})
```

<section v-click="1">
  <logos-vue />
  <logos-solidjs-icon />
  <logos-preact />
  <logos-angular-icon />
  <logos-svelte-icon class="opacity-80"/>
</section>
</div>
</section>
