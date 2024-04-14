<script setup lang="ts">
import { watchEffect } from 'vue';
import Homepage from './Homepage.vue'
import Twitter from './Twitter.vue'

const props = defineProps<{ page: number, totalPages: number }>()
const audio = new Audio('/music.mp3');

watchEffect(() => {
  if(props.page === 1) {
    audio.pause()
    audio.currentTime = 0
  }
  if(props.page === 2) {
    audio.play()
  }
  if(props.page === 6) {
    audio.pause()
  }
})

</script>

<template>
  <footer :class="{theme: page === 1}">
    <div class="about-me" v-if="[1].includes(page)">
      <Homepage />
      <Twitter />
    </div>
  </footer>
</template>

<style scoped>
.about-me {
  position: absolute;
  right: 50px;
  bottom: 50px;
  color: black;
  z-index: 2;
}

.theme .about-me {
  color: inherit;
}

.about-me :is(a, a:hover) {
  border: none;
  margin-top: 0.5rem;
}
</style>