<script setup lang="ts">
import GearWork from './GearWork.vue';

const props = defineProps<{ working: boolean }>()
</script>

<template>
  <section>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="dot"></div>
    <GearWork v-if="props.working" :size="150" />
  </section>
</template>

<style scoped>
section {
  border-radius: 10px 10px 0 0;
  border: 5px solid #333;
  width: 250px;
  position: relative;
  background-color: #83838359;
  display: grid !important;
  place-items: center;
  height: 100%;
}

.line {
  position: absolute;
  left: 5px;
  right: 5px;
  height: 10px;
  background-color: #333;
  border-radius: 5px;
}

.line:first-child {
  top: 15px;
}

.line:nth-child(2) {
  bottom: 15px;
}

.line:nth-child(3) {
  bottom: 40px;
}

.dot {
  position: absolute;
  bottom: 60px;
  right: 5px;
  height: 15px;
  width: 15px;
  background-color: #333;
  border-radius: 50%;
}
</style>