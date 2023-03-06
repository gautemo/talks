<script setup lang="ts">
import Handlekurv from './Handlekurv.vue';
</script>

<template>
  <section>
    <Handlekurv/>
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  border: 10px solid #333;
  background-color: #ffffffb7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 20px 5px 5px 5px;
}


section::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 110px;
  right: 110px;
  height: 15px;
  background-color: #333;
  border-radius: 0 0 5px 5px;
}
</style>