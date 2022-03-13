<script setup lang="ts">
import { computed } from 'vue'
import BarBlock from './BarBlock.vue';

const props = defineProps<{
  title: string,
  bars: { name: string, points: number }[],
  postfix?: string,
}>()

const max = computed(() => Math.max(...props.bars.map(bar => bar.points)))
const sum = computed(() => props.bars.reduce((acc, bar) => acc + bar.points, 0))
</script>

<template>
    <h3>{{ title }}</h3>
    <div class="grid">
      <template v-for="bar in bars.sort((a, b) => b.points - a.points)" :key="bar.name">
        <span>{{ bar.name }}</span>
        <BarBlock :points="bar.points" :max="max" :postfix="postfix" :sum="sum"/>
      </template>
    </div>
</template>

<style scoped>
h3 {
  margin-bottom: 15px;
}

.grid{
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: end;
  gap: 3px 5px;
}
</style>