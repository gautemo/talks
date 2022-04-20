<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import VotePrefers from './components/VotePrefers.vue'
import { voteIndex } from './firebase';
import Intro from './components/Intro.vue';
import VoteLanguage from './components/VoteLanguage.vue';
import VoteTemplate from './components/VoteTemplate.vue';
import VoteIf from './components/VoteIf.vue';
import VoteList from './components/VoteList.vue';
import VoteState from './components/VoteState.vue';
import VoteComputed from './components/VoteComputed.vue';
import VoteProps from './components/VoteProps.vue';

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
  <VoteIf v-if="page === 4"/>
  <VoteList v-if="page === 5"/>
  <VoteState v-if="page === 6"/>
  <VoteComputed v-if="page === 7"/>
  <VoteProps v-if="page === 8"/>
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
  font-family: "Avenir Next","Nunito Sans",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

footer{
  display: flex;
}

footer > button{
  flex: 1;
  font-size: 1.5rem;
}

button:not([disabled]){
  cursor: pointer;
}
</style>
