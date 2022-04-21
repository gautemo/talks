<script setup lang="ts">
import { computed, ref } from 'vue';
import { dx } from './firebase';
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
  const angular = dx.value.find(({ name }) => name === 'Angular').points * (valueDX.value / 100) +
        performance.find(({ name }) => name === 'Angular').points * (valuePerformance.value / 100) +
        eco.find(({ name }) => name === 'Angular').points * (valueEco.value / 100)
  const react = dx.value.find(({ name }) => name === 'React').points * (valueDX.value / 100) +
        performance.find(({ name }) => name === 'React').points * (valuePerformance.value / 100) +
        eco.find(({ name }) => name === 'React').points * (valueEco.value / 100)
  const svelte = dx.value.find(({ name }) => name === 'Svelte').points * (valueDX.value / 100) +
        performance.find(({ name }) => name === 'Svelte').points * (valuePerformance.value / 100) +
        eco.find(({ name }) => name === 'Svelte').points * (valueEco.value / 100)
  const vue = dx.value.find(({ name }) => name === 'Vue').points * (valueDX.value / 100) +
        performance.find(({ name }) => name === 'Vue').points * (valuePerformance.value / 100) +
        eco.find(({ name }) => name === 'Vue').points * (valueEco.value / 100)
  const total = angular + react + svelte + vue
  return [
    { name: 'Angular', points: Number(((angular/total)*100).toFixed(1)) },
    { name: 'React', points: Number(((react/total)*100).toFixed(1)) },
    { name: 'Svelte', points: Number(((svelte/total)*100).toFixed(1)) },
    { name: 'Vue', points: Number(((vue/total)*100).toFixed(1)) },
  ]
})
</script>

<template>
  <div class="space"></div>
  <BarChart title="🏆 Vinner 🏆 - hva vi egentlig liker" :bars="winner" postfix="%" />
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
.space{
  margin: 50px;
}
section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
}
input{
  cursor: pointer;
}
</style>