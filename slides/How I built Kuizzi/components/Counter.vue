<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ styled: boolean }>()

const count = ref(0)
</script>

<template>
  <button @click="count++" :class="{ styled: styled }">{{count}}</button>
</template>

<style scoped>
.styled {
  padding: 0.5rem 1rem;
  background-image: linear-gradient(#e242f9, #4f93f9);
}
</style>