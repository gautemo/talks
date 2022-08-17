<script setup lang="ts">
const props = defineProps<{
  snippetId: number,
  label: string,
}>()
</script>

<template>
  <div class="grid font">
    <h1 class="label">{{props.label}}</h1>
    <div class="grow">
      <Code :snippetId="props.snippetId"/>
    </div>
  </div>
</template>

<style scoped>
.label{
  font-size: 1.5em;
  margin: 0;
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
</style>