export const code = {
  react: `import { useState, useMemo, useEffect } from 'react'

export function Component() {
  const [count, setCount] = useState(0)
  const double = useMemo(() => count * 2, [count])
  useEffect(() => console.log(double), [double])
  function increase() {
    setCount(count + 1)
    // count = 0
    // double = 0
  }

  return (
    <>
      <p>Count: { count }</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}`,
  vue: `<script setup>
import { ref, reactive, computed, watchEffect } from 'vue'

const state = reactive({ count: 0 })
const double = computed(() => state.count * 2)
watchEffect(() => console.log(double.value))
function increase() {
  state.count++
  // count = 1
  // double = 2
}
</script>

<template>
  <p>Count: {{ state.count }}</p>
  <button @click="increase">Bump</button>
</template>`,
  solid: `import { createSignal, createEffect } from 'solid-js'

export function Component() {
  const [count, setCount] = createSignal(0)
  const double = () => count() * 2
  createEffect(() => console.log(double()))
  function increase() {
    setCount(count() + 1)
    // count = 1
    // double = 2
  }

  return (
    <>
      <p>Count: { count() }</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}`,
  preact: `import { signal, computed, effect } from '@preact/signals'

export function Component() {
  const count = signal(0)
  const double = computed(() => count.value * 2)
  effect(() => console.log(double.value))
  function increase() {
    count.value++
    // count = 1
    // double = 2
  }

  return (
    <>
      <p>Count: { count }</p>
      <button onClick={increase}>Bump</button>
    </>
  )
}`,
  qwik: `import { component$, useSignal, useComputed$, useTask$, $ } from '@builder.io/qwik'

export default component$(() => {
  const count = useSignal(0)
  const double = useComputed$(() => count.value * 2)
  useTask$(({track}) => {
    track(() => double.value)
    console.log(double.value)
  })
  const increase = $(() => {
    count.value++
    // count = 1
    // double = 0
  })

  return (
    <>
      <p>Count: { count.value }</p>
      <button onClick$={increase}>Bump</button>
    </>
  )
})`,
  angular: `import { Component, signal, computed, effect } from '@angular/core'

@Component({
  selector: 'count-component',
  templateUrl: './count.component.html',
})
export class CountComponent {
  count = signal(0)
  double = computed(() => this.count() * 2)
  constructor() {
    effect(() => console.log(this.double()))
  }

  increase() {
    count.update(prev => prev + 1)
    // count = 1
    // double = 2
  }
}`,
  svelte: `<script>
	let count = $state(0)
  const double = $derived(count * 2)
  $effect(() => console.log(count))
  function increase() {
    count++
    // count = 1
    // double = 2
  }
</script>

<p>Count: { count }</p>
<button on:click={increase}>Bump</button>`,
}