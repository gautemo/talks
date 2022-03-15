<script setup lang="ts">
import { votes, voteKeys } from './firebase'
import BarChart from './BarChart.vue'

defineProps<{
    votekey: voteKeys;
    title: string;
}>()
</script>

<template>
<BarChart :title="title" :bars="votes[votekey]"/>
</template>