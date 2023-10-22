<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="example">
    <p>Count: {{ count }}</p>
    <button @click="count++">Bump</button>
  </div>
  <div class="console">
    <i>Console:</i>
    <p v-for="n in count">Double: {{ n * 2 }}</p>
  </div>
</template>

<style scoped>
.example {
  background-color: white;
  border: 2px solid #007f88; 
  border-radius: 5px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
}

button {
  border: 1px solid #000;
  background-color: rgb(189, 189, 189);
  padding: 2px 10px;
}

.console {
  margin-top: 2rem;
  background-color: #000;
  border: 2px solid #007f88; 
  border-radius: 5px;
  padding: 1rem;
}

.console p {
  border-bottom: 1px solid rgb(189, 189, 189);
  font-size: 1rem;
}

.console p::before {
  content: '›';
  margin-right: 5px;
  color: #32b903;
}
</style>