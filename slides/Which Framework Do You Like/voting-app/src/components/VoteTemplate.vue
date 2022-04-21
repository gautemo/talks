<script setup lang="ts">
import VoteScreen from './VoteScreen.vue';

</script>

<template>
<VoteScreen title="Template" votekey="template" :options="['JSX', 'HTML', 'SFC']">
  <template #option1>
    <span>JSX</span>
  </template>
  <template #option2>
    <span>HTML</span>
  </template>
  <template #option3>
    <span>Single File Components</span>
  </template>
</VoteScreen>
</template>

<style scoped>
span{
  font-size: 1.5rem;
}
</style>