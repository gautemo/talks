<script setup lang="ts">
import { computed, ref } from 'vue';
import { votes } from '../votes';

const performance = [
  { name: 'Angular', points: 2 },
  { name: 'React', points: 7 + 3 },
  { name: 'Svelte', points: 13 + 27 },
  { name: 'Vue', points: 26 + 22 },
]
const eco = [
  { name: 'Angular', points: 6 + 6 },
  { name: 'React', points: 20 + 30 },
  { name: 'Svelte', points: 2 + 9 },
  { name: 'Vue', points: 9 + 18 },
]

const valueDX = ref(100)
const valuePerformance = ref(100)
const valueEco = ref(100)

const winner = computed(() => {
  const points = {
    Vue: 0,
    React: 0,
    Angular: 0,
    Svelte: 0,
  }
  for (let [p, val] of Object.entries(votes.value)) {
    if (p === 'prefers' || val === undefined) continue
    if (['Vue', 'JavaScript', 'TypeScript', 'JSX', 'SFC', 'Directive'].includes(val)) points.Vue++
    if (['React', 'JavaScript', 'TypeScript', 'JSX'].includes(val)) points.React++
    if (['Angular', 'TypeScript', 'HTML', 'Directive'].includes(val)) points.Angular++
    if (['Svelte', 'JavaScript', 'TypeScript', 'SFC'].includes(val)) points.Svelte++
  }
  const totalDX = points.Angular + points.React + points.Svelte + points.Vue
  points.Angular = Math.round((points.Angular / totalDX) * 100)
  points.React = Math.round((points.React / totalDX) * 100)
  points.Svelte = Math.round((points.Svelte / totalDX) * 100)
  points.Vue = Math.round((points.Vue / totalDX) * 100)

  const angular = points.Angular * (valueDX.value / 100) +
    performance.find(({ name }) => name === 'Angular')!.points * (valuePerformance.value / 100) +
    eco.find(({ name }) => name === 'Angular')!.points * (valueEco.value / 100)
  const react = points.React * (valueDX.value / 100) +
    performance.find(({ name }) => name === 'React')!.points * (valuePerformance.value / 100) +
    eco.find(({ name }) => name === 'React')!.points * (valueEco.value / 100)
  const svelte = points.Svelte * (valueDX.value / 100) +
    performance.find(({ name }) => name === 'Svelte')!.points * (valuePerformance.value / 100) +
    eco.find(({ name }) => name === 'Svelte')!.points * (valueEco.value / 100)
  const vue = points.Vue * (valueDX.value / 100) +
    performance.find(({ name }) => name === 'Vue')!.points * (valuePerformance.value / 100) +
    eco.find(({ name }) => name === 'Vue')!.points * (valueEco.value / 100)
  const total = angular + react + svelte + vue
  return [
    { name: 'Angular', points: Number(((angular / total) * 100).toFixed(1)) },
    { name: 'React', points: Number(((react / total) * 100).toFixed(1)) },
    { name: 'Svelte', points: Number(((svelte / total) * 100).toFixed(1)) },
    { name: 'Vue', points: Number(((vue / total) * 100).toFixed(1)) },
  ].sort((a, b) => b.points - a.points)
})
</script>

<template>
  <h1 v-if="votes.prefers !== winner[0].name">Du foretrekker {{ votes.prefers ?? 'Ukjent' }}, men liker egentlig
    {{ winner[0].name }}!</h1>
  <h1 v-else>Du både foretrekker og liker {{ votes.prefers ?? 'Ukjent' }}!</h1>
  <div class="grid">
    <div class="title">Framework</div>
    <template v-for="(fw, i) in winner" :key="fw.name">
      <span v-if="i === 0">🏆</span>
      <span v-else-if="i === 1">🥈</span>
      <span v-else-if="i === 2">🥉</span>
      <span v-else></span>
      <div class="name">{{ fw.name }}</div>
      <div>{{ fw.points }} %</div>
    </template>
  </div>
  <section>
    <label>
      <input type="range" min="0" max="100" v-model="valueDX">
      Utvikleropplevelse
    </label>
    <label>
      <input type="range" min="0" max="100" v-model="valuePerformance">
      Performance
    </label>
    <label>
      <input type="range" min="0" max="100" v-model="valueEco">
      Økosystem
    </label>
  </section>
</template>

<style scoped>
h1{
  margin: 10px;
  text-align: center;
}

section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 10px;
}

input {
  cursor: pointer;
}

.grid{
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  gap: 5px 15px;
  font-size: 1.5rem;
}

.title{
  grid-column: span 3;
  font-weight: bold;
}

.name{
  min-width: 75px;
}
</style>