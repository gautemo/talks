<script setup lang="ts">
import Server from './Server.vue'

const props = defineProps<{ steps: string[], working: boolean }>()
</script>

<template>
  <main>
    <slot></slot>
    <section>
      <div v-for="(step, index) in props.steps" :key="index" :class="{ left: index % 2 !== 0 }">
        {{ step }}
      </div>
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
  gap: 35px;
}

div {
  border-bottom: 3px solid #000;
  position: relative;
  display: flex;
  justify-content: center;
}

div::after {
  content: "";
  width: 20px;
  height: 3px;
  background-color: #000;
  transform: rotate(25deg);
  position: absolute;
  right: 0;
  top: 22px;
}

div::before {
  content: "";
  width: 20px;
  height: 3px;
  background-color: #000;
  transform: rotate(-25deg);
  position: absolute;
  right: 0;
  top: 31px;
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