<script setup lang="ts">
import { computed, ref } from 'vue';

const step = ref(1)
const steps = [
  { name: 'react', size: 2.5, h: 10 },
  { name: 'react-dom', size: 42, h: 100 },
  { name: 'react-router-dom', size: 20, h: 60 },
  { name: 'react-redux', size: 4.7, h: 10 },
  { name: '@reduxjs/toolkit', size: 13.7, h: 40 },
  { name: 'redux-saga', size: 5, h: 10 },
  { name: 'mui', size: 173, h: 150 },
]

const visibleSteps = computed(() => steps.slice(0, step.value))

const total = computed(() => {
  return visibleSteps.value.reduce((acc, it) => it.size + acc, 0)
})
</script>

<template>
  <section @click="step++">
    <p>{{ total }} kB</p>
    <ul>
      <li v-for="s in visibleSteps" :style="{ minHeight: s.h + 'px'}">
        {{ s.name }} {{ s.size }} kB
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  position: absolute;
  right: 50px;
  bottom: 50px;
}

ul {
  display: flex;
  flex-direction: column-reverse;
  list-style: none;
}

li {
  background-color: rgb(0, 60, 128);
  color: white;
  display: flex;
  align-items: center;
  border: 2px solid #ffffff;
  padding: 0 10px;
  min-width: 200px;
}

li:last-child {
  border-radius: 10px 10px 0 0;
}

p {
  text-align: center;
  margin: 0;
  font-weight: bold;
}
</style>