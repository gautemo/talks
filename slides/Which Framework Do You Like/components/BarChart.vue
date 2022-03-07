<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string,
  bars: { name: string, points: number }[]
}>()

const max = computed(() => Math.max(...props.bars.map(bar => bar.points)))
const barHeight = 45
</script>

<template>
<h3>{{title}}</h3>
<svg class="chart" width="100%" :height="bars.length * barHeight">
  <g v-for="(bar, i) in bars" :key="bar.name">
    <rect :width="`${(bar.points/max)*80}%`" :height="barHeight-5" :y="i*barHeight" rx="2px"></rect>
    <text x="10" :y="i*barHeight + 25">{{bar.name}}</text>
    <text :x="`${(bar.points/max)*81}%`" :y="i*barHeight + 25">{{bar.points}}</text>
  </g>
</svg>  
</template>

<style scoped>
h3{
  margin-bottom: 15px;
}

text{
  fill: currentColor;
}

rect{
  fill: rebeccapurple;
}
</style>