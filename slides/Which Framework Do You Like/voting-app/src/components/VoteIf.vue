<script setup lang="ts">
import VoteScreen from './VoteScreen.vue';

</script>

<template>
<VoteScreen title="Conditional rendering" votekey="if" :options="['React', 'Directive', 'Svelte']">
  <template #option1>
    <span>JSX</span>
  </template>
  <template #option2>
    <span>Directive</span>
  </template>
  <template #option3>
    <span>Svelte syntax</span>
  </template>
</VoteScreen>
</template>

<style scoped>
span{
  font-size: 1.5rem;
}
</style>