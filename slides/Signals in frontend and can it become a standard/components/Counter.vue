<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
</script>

<template>
  <button @click="counter++">{{ counter }}</button>
</template>


<style scoped>
button {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 30px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  margin: 7rem;
}

button:hover {
  background-color: #fff;
}
</style>