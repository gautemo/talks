<script setup lang="ts">
import { todo } from './store'
</script>

<template>
  <h1>To Do</h1>
  <ul>
    <li v-for="t of todo">
      <label>
        <input type="checkbox" v-model="t.checked">
        <span>{{ t.name }}</span>
      </label>
    </li>
  </ul>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
}

ul {
  list-style: none;
}

label {
  display: flex;
  gap: 1rem;
}

input[type=checkbox] {
  scale: 1.5;
}
</style>