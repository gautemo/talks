<script setup lang="ts">
import { code } from '../code'

const props = defineProps<{ framework: keyof typeof code }>()

function copy() {
  navigator.clipboard.writeText(code[props.framework])
}
</script>

<template>
  <div>
    <material-symbols-content-copy @click="copy"/>
  </div>
</template>

<style scoped>
div {
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
}
</style>