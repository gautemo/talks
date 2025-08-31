<script setup lang="ts">
import VennDiagrams from './VennDiagrams.vue';

const props = defineProps<{
  snippetId: number,
  label: string,
  showVenn?: boolean;
}>()
</script>

<template>
  <div class="grid font">
    <div class="top-row">
      <h1 class="label">{{props.label}}</h1>
      <VennDiagrams v-if="props.showVenn"/>
    </div>
    <div class="grow">
      <Code :snippetId="props.snippetId"/>
    </div>
  </div>
</template>

<style scoped>
.label{
  font-size: 1.5em;
  margin: 0;
  flex: 1;
}

.grid{
  display: grid;
  grid-template: auto 1fr / 1fr;
  height: 100%;
}

.grow{
  height: 100%;
  min-height: 0;
  min-width: 0;
}

.top-row {
  display: flex;
}
</style>