<script setup lang="ts">
import { computed, ref } from 'vue'
import { setVoteIndex, voteKeys, votes } from './firebase'
const props = defineProps<{
  index: number
  votekey?: voteKeys
}>()

function setActive(){
  setVoteIndex(props.index)
  active.value = true
}

const active = ref(false)
const nrVotes = computed(() => {
  if(!props.votekey) return -1
  return votes.value[props.votekey].reduce((acc, curr) => acc + curr.points, 0)
})
</script>

<template>
  <section @click="setActive" :class="{active: active}">
    <div class="column">
      <p v-if="props.votekey">Avstemning</p>
      <p v-else>Vinner</p>
      <p v-if="props.votekey">Stemmer: {{nrVotes}}</p>
    </div>
    <img src="/qr-vote.png" alt="QR code" />
  </section>
</template>

<style scoped>
section {
  position: absolute;
  top: 0;
  right: 0;
  border-left: 3px solid #ff260082;
  border-bottom: 3px solid #ff260082;
  border-radius: 2px;
  padding: 3px;
  cursor: pointer;
  display: flex;
  gap: 5px;
  background-color: var(--prism-background);
}

.active{
  border-left: 3px solid #2bff0082;
  border-bottom: 3px solid #2bff0082;
}

img {
  border-radius: 5px;
  height: 100px;
  width: 100px;
  display: inline-block;
}

p{
  margin: 0;
  margin-right: 5px;
}
</style>