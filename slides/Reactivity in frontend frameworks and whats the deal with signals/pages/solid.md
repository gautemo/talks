# Solid

- Signals 2021, v1

<logos-solidjs-icon class="text-9xl scale-200 translate-x-3em translate-y-60px" />

---
transition: fade
---

# Solid reaktivitet
 
```jsx
import { createSignal, createEffect } from 'solid-js'

export function Component() {
  const [count, setCount] = createSignal(0)
  const double = () => count() * 2
  createEffect(() => console.log(double()))
  function increase() {
    setCount(count() + 1)
  }

  return (
    <>
      <p>Count: { count() }</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}
```

---
transition: fade
---

# Solid reaktivitet
 
```jsx {8,9,10}
import { createSignal, createEffect } from 'solid-js'

export function Component() {
  const [count, setCount] = createSignal(0)
  const double = () => count() * 2
  createEffect(() => console.log(double()))
  function increase() {
    setCount(count() + 1)
    console.log(count()) // 1
    console.log(double()) // 2
  }

  return (
    <>
      <p>Count: { count() }</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}
```

---

# Solid reaktivitet
 
```jsx
import { createSignal, createEffect } from 'solid-js'

const [count, setCount] = createSignal(0)
const double = () => count() * 2
createEffect(() => console.log(double()))
function increase() {
  setCount(count() + 1)
}

export function Component() {
  return (
    <>
      <p>Count: { count() }</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}
```

---
layout: center
---

# Solid re-render

```mermaid
graph TD;
    A---B;
    A---C[C - state brukes];
    B---E;
    C---D;
    C---F;
    D---G;
    D---H[H - state brukes];
    F---I;
    style C stroke:#ff0000,stroke-dasharray: 5 5
    style H stroke:#ff0000,stroke-dasharray: 5 5
```

---

# Solid oppsummering

|                                            | <logos-solidjs-icon class="text-5xl"/>                       |
| ------------------------------------------ | ------------------------------------------------------------ |
| mutable vs immutable API                   | <span v-click>Immutable</span>                               |
| State er alltid i sync                     | <emojione-white-heavy-check-mark v-click class="text-2xl"/>  |
| Re-render                                  | <material-symbols-jump-to-element v-click class="text-3xl"/> |
| Fungerer utenfor komponenten               | <emojione-white-heavy-check-mark v-click class="text-2xl"/>  |
| Fungerer utenfor rammeverk                 | <openmoji-palm-down-hand v-click class="text-2xl"/>          |

