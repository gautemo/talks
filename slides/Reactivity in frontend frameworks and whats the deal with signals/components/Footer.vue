<script setup lang="ts">
import { computed, ref } from 'vue';
import Homepage from './Homepage.vue'
import Twitter from './Twitter.vue'

const props = defineProps<{ page: number, totalPages: number }>()

const colors = ['#62d5fa', '#64b687', '#3a5792', '#613cb1', '#a580ed', '#a73a37', '#eb5027']
const index = ref(0)
setInterval(() => {
  index.value++
  if(index.value >= colors.length) index.value = 0
}, 1000*45)
const color = computed(() => {
  if([12,13,14,15].includes(props.page)) return colors[0]
  if([16,17,18,19].includes(props.page)) return colors[1]
  if([20,21,22,23].includes(props.page)) return colors[2]
  if([24,25,26,27].includes(props.page)) return colors[3]
  if([28,29,30,31].includes(props.page)) return colors[4]
  if([32,33,34,35].includes(props.page)) return colors[5]
  if([36,37,38,39, 40].includes(props.page)) return colors[6]
  return colors[index.value]
})
</script>

<template>
  <footer>
    <div class="about-me" v-if="[1, 2, 43].includes(page)">
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