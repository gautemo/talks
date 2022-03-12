<script setup lang="ts">
import { ref, computed } from 'vue'
import { useElementSize } from '@vueuse/core'

const props = defineProps<{
    points: number;
    max: number;
}>()

const container = ref<HTMLElement>()
const { width } = useElementSize(container)
const pixelWitdh = computed(() => `${props.points / props.max * (width.value-100)}px`)
const numberFormat = new Intl.NumberFormat()
</script>

<template>
<div class="container" ref="container">
    <div class="bar"></div>
    <span>{{ numberFormat.format(points) }}</span>
</div>
</template>

<style scoped>
.container{
    display: flex;
    gap: 5px;
}

.bar{
    width: v-bind(pixelWitdh);
    background-color: rebeccapurple;
    height: 100%;
    border-radius: 0 3px 3px 0;
}
</style>