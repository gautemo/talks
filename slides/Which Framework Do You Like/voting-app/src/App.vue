<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import VotePrefers from './components/VotePrefers.vue'
import { voteIndex } from './firebase';
import Intro from './components/Intro.vue';
import VoteLanguage from './components/VoteLanguage.vue';
import VoteTemplate from './components/VoteTemplate.vue';

const page = ref(0)

watchEffect(() => {
  page.value = voteIndex.value
})
</script>

<template>
  <Intro v-if="page === 0"/>
  <VotePrefers v-if="page === 1"/>
  <VoteLanguage v-if="page === 2"/>
  <VoteTemplate v-if="page === 3"/>
  <footer>
    <button @click="page--" :disabled="page === 0">←</button>
    <button @click="page++" :disabled="page === voteIndex">→</button>
  </footer>
</template>

<style>
html, body, #app{
  height: 100%;
  margin: 0;
}

#app{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

footer{
  display: flex;
}

footer > button{
  flex: 1;
}
</style>
