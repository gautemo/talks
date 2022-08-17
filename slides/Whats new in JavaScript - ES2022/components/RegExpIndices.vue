<script setup lang="ts">
import { computed } from 'vue'
import CodeSlide from './CodeSlide.vue'
import { globalStoreCode } from './globalStoreCode'

const match = computed(() => {
  if(globalStoreCode.value.includes(`/\\d+/.exec`)){
    return 0
  }else if(globalStoreCode.value.includes(`/\\d+/d.exec`)) {
    return 1
  }else {
    return -1
  }
})
</script>

<template>
  <CodeSlide label="RegExp match indices" :snippetId="4"/>
  <span v-if="match === -1">find the number 123 please</span>
  <span v-if="match === 0">find the number <mark>1</mark>23 please</span>
  <span v-if="match === 1">find the number <mark>123</mark> please</span>
</template>