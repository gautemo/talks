<script setup lang="ts">
import { computed, ref } from 'vue';
import Homepage from './Homepage.vue'
import Twitter from './Twitter.vue'

const props = defineProps<{ page: number, totalPages: number }>()

console.log(props)

const colors = ['#5fd3f3a1', '#f73c01a1', '#3eb27fa1', '#bd032da1']
const index = ref(0)
setInterval(() => {
  index.value++
  if(index.value >= colors.length) index.value = 0
}, 1000*120)
const color = computed(() => {
  if([13,14].includes(props.page)) return colors[0]
  if([15,16].includes(props.page)) return colors[3]
  if([17,18].includes(props.page)) return colors[2]
  if([19,20].includes(props.page)) return colors[1]
  return colors[index.value]
})
</script>

<template>
  <footer>
    <div class="about-me" v-if="[1, 3, 49].includes(page)">
      <Homepage />
      <Twitter />
    </div>
    <div class="progress" :style="{ width: `${props.page * 100 / props.totalPages}%` }"></div>
  </footer>
</template>

<style scoped>
.about-me {
  position: absolute;
  right: 50px;
  bottom: 50px;
}

.about-me :is(a, a:hover) {
  border: none;
  margin-top: 0.5rem;
}

.progress {
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: v-bind(color);
  box-shadow: 0 0 10px v-bind(color);
  transition: width 0.4s ease-in-out;
}

footer::before {
  position: absolute;
  top: 0;
  width: 100%;
  content: "";
  display: block;
  background: v-bind(color);
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 35%);
  height: 50px;
  transition: all 3s ease-in-out;
}
</style>