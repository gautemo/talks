<script setup lang="ts">
import Server from './Server.vue'

const props = defineProps<{ step: number, working: boolean }>()
</script>

<template>
  <main>
    <slot></slot>
    <section>
      <div v-for="index in props.step" :key="index" :class="{ left: index % 2 === 0 }"></div>
    </section>
    <Server :working="props.working"/>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  display: grid;
  grid-template: 1fr / auto 1fr auto;
  gap: 10px;
}

section {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

div {
  border-bottom: 3px solid #000;
  position: relative;
}

div::after {
  content: "";
  width: 20px;
  height: 3px;
  background-color: #000;
  transform: rotate(25deg);
  position: absolute;
  right: 0;
  top: -5px;
}

div::before {
  content: "";
  width: 20px;
  height: 3px;
  background-color: #000;
  transform: rotate(-25deg);
  position: absolute;
  right: 0;
  top: 5px;
}

.left::after {
  left: 0;
  transform: rotate(-25deg);
}

.left::before {
  left: 0;
  transform: rotate(25deg);
}
</style>