<script setup lang="ts">
const props = defineProps<{
  snippetId: number,
  label: string,
}>()
</script>

<template>
  <div class="font">
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

div{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.grow{
  flex: 1;
}
</style>