<script setup lang="ts">
import { computed, ref } from 'vue';
import Homepage from './Homepage.vue'
import Twitter from './Twitter.vue'

const props = defineProps<{ page: number, totalPages: number }>()

// react, vue, solid, preact, angular, svelte
const colors = ['#62d5fa', '#64b687', '#3a5792', '#613cb1', '#a73a37', '#eb5027', '#324fff']
const index = ref(0)
setInterval(() => {
  index.value++
  if(index.value >= colors.length) index.value = 0
}, 1000*45)
const color = computed(() => {
  if(10 <= props.page && props.page <= 11) return colors[0]
  if(12 <= props.page && props.page <= 13) return colors[4]
  if(14 <= props.page && props.page <= 15) return colors[1]
  if(16 <= props.page && props.page <= 17) return colors[5]
  if(18 <= props.page && props.page <= 19) return colors[3]
  if(20 <= props.page && props.page <= 21) return colors[2]
  if(22 <= props.page && props.page <= 24) return colors[6]
  return colors[index.value]
})
</script>

<template>
  <footer :class="{theme: page > 2}">
    <div class="about-me" v-if="[1, 2, 3, 50, 51, 52, 53].includes(page)">
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
  color: black;
}

.theme .about-me {
  color: inherit;
}

.about-me :is(a, a:hover) {
  border: none;
  margin-top: 0.5rem;
}

.theme .progress {
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: v-bind(color);
  box-shadow: 0 0 10px v-bind(color);
  transition: width 0.4s ease-in-out;
}

footer.theme::before {
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