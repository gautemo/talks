# Svelte

- Runes 202?, v5

<logos-svelte-icon class="text-9xl scale-200 translate-x-3em translate-y-60px" />

---
transition: fade
---

# Svelte 4 reactivity
 
```html
<script>
  let count = 0
  $: double = count * 2
  function increase() {
    count++
  }
</script>

<p>Count: { count }</p>
<button on:click={increase}>Bump</button>
```

---
transition: fade
---

# Svelte 5 reactivity
 
```html {2,3}
<script>
  let count = $state(0)
  const double = $derived(count * 2)
  function increase() {
    count++
  }
</script>

<p>Count: { count }</p>
<button on:click={increase}>Bump</button>
```

---
transition: fade
---

# Svelte 5 reactivity
 
```html {4}
<script>
  let count = $state(0)
  const double = $derived(count * 2)
  $effect(() => console.log(double))
  function increase() {
    count++
  }
</script>

<p>Count: { count }</p>
<button on:click={increase}>Bump</button>
```

---
transition: fade
---

# Svelte 5 reactivity
 
```html {6-8}
<script>
  let count = $state(0)
  const double = $derived(count * 2)
  $effect(() => console.log(double))
  function increase() {
    count++
    console.log(count) // 1
    console.log(double) // 2
  }
</script>

<p>Count: { count }</p>
<button on:click={increase}>Bump</button>
```

---
transition: fade
---

# Svelte 5 reactivity
 
<i>state.js:</i>
```js
export let count = $state(0) // ❌
```

---

# Svelte 5 reactivity

<i>state.svelte.js:</i>
```js
class Count {
	value = $state(0)
}

export const count = new Count()
```

---
layout: center
---

# Svelte 5 re-render

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

# Svelte summary

|                                            | <logos-svelte-icon class="text-5xl"/> v4                     | <logos-svelte-icon class="text-5xl"/> v5                     |
| ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| mutable vs immutable API                   | <span v-click>Mutable</span>                                 | <span v-click>Mutable</span>                                 |
| State is always in sync                    | <emojione-cross-mark-button v-click class="text-2xl"/>       | <emojione-white-heavy-check-mark v-click class="text-2xl"/>  |
| Re-render                                  | <material-symbols-jump-to-element v-click class="text-3xl"/> | <material-symbols-jump-to-element v-click class="text-3xl"/> |
| Works outside the component                | <emojione-cross-mark-button v-click class="text-2xl"/>       | <emojione-white-heavy-check-mark v-click class="text-2xl"/>  |
| Works outside the framework                | <emojione-cross-mark-button v-click class="text-2xl"/>       | <emojione-cross-mark-button v-click class="text-2xl"/>       |

