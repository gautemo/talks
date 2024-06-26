# Preact

- Signals 2022, @preact/signals

<logos-preact class="text-9xl scale-200 translate-x-3em translate-y-60px" />

---
transition: fade
---

# Preact reactivity
 
```jsx
export function Component() {
  function increase() {
  }

  return (
    <>
      <p>Count: 0</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}
```

---
transition: fade
---

# Preact reactivity
 
```jsx {1,4,6,11}
import { signal } from '@preact/signals'

export function Component() {
  const count = signal(0)
  function increase() {
    count.value++
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}
```

---
transition: fade
---

# Preact reactivity
 
```jsx {1,5}
import { signal, computed } from '@preact/signals'

export function Component() {
  const count = signal(0)
  const double = computed(() => count.value * 2)
  function increase() {
    count.value++
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}
```

---
transition: fade
---

# Preact reactivity
 
```jsx {1,6}
import { signal, computed, effect } from '@preact/signals'

export function Component() {
  const count = signal(0)
  const double = computed(() => count.value * 2)
  effect(() => console.log(double.value))
  function increase() {
    count.value++
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}
```

---
transition: fade
---

# Preact reactivity
 
```jsx {8,9,10}
import { signal, computed, effect } from '@preact/signals'

export function Component() {
  const count = signal(0)
  const double = computed(() => count.value * 2)
  effect(() => console.log(double.value))
  function increase() {
    count.value++
    console.log(count.value) // 1
    console.log(double.value) // 2
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}
```

---

# Preact reactivity
 
```jsx {3-8}
import { signal, computed, effect } from '@preact/signals'

const count = signal(0)
const double = computed(() => count.value * 2)
effect(() => console.log(double.value))
function increase() {
  count.value++
}

export function Component() {
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}
```

---
layout: center
---

# Preact re-render

```mermaid
graph TD;
    A---B;
    A---C[C - state used];
    B---E;
    C---D;
    C---F;
    D---G;
    D---H[H - state used];
    F---I;
    style C stroke:#ff0000,stroke-dasharray: 5 5
    style H stroke:#ff0000,stroke-dasharray: 5 5
```

---

# Preact summary

|                                            | <logos-preact class="text-5xl"/>                             |
| ------------------------------------------ | ------------------------------------------------------------ |
| mutable vs immutable API                   | <span v-click>Mutable</span>                                 |
| State is always in sync                    | <emojione-white-heavy-check-mark v-click class="text-2xl"/>  |
| Re-render                                  | <material-symbols-jump-to-element v-click class="text-3xl"/> |
| Works outside the component                | <emojione-white-heavy-check-mark v-click class="text-2xl"/>  |
| Works outside the framework                | <emojione-white-heavy-check-mark v-click class="text-2xl"/>  |