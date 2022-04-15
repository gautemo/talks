<script setup lang="ts">
import { ref } from 'vue'
import { setVoteIndex } from './firebase'
const props = defineProps<{index: number}>()

function setActive(){
  setVoteIndex(props.index)
  active.value = true
}

const active = ref(false)
</script>

<template>
  <section @click="setActive" :class="{active: active}">
    <p>Avstemning</p>
    <img src="/qr-vote.png" alt="QR code" />
  </section>
</template>

<style scoped>
section {
  position: absolute;
  top: 0;
  right: 0;
  border-left: 3px solid #ff260082;
  border-bottom: 3px solid #ff260082;
  border-radius: 2px;
  padding: 3px;
  cursor: pointer;
}

.active{
  border-left: 3px solid #2bff0082;
  border-bottom: 3px solid #2bff0082;
}

img {
  border-radius: 5px;
  height: 100px;
  width: 100px;
  display: inline-block;
}

p{
  margin: 0;
  display: inline-block;
  margin-right: 5px;
}
</style>