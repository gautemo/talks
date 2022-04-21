<script setup lang="ts">
import { ref, watch } from 'vue'
import { votes, VoteKey } from '../votes';

const props = defineProps<{
  title: string,
  votekey: VoteKey,
  options: string[],
}>()

const selected = ref<number>(props.options.indexOf(votes.value[props.votekey] ?? ''))
watch(selected, () => {
  votes.value[props.votekey] = props.options[selected.value]
})
</script>

<template>
  <h1>{{title}}</h1>
  <div class="options">
    <button @click="selected = 0" :class="{selected: selected === 0}">
      <slot name="option1"></slot>
    </button>
    <button @click="selected = 1" :class="{selected: selected === 1}">
      <slot name="option2"></slot>
    </button>
    <button @click="selected = 2" v-if="options.length > 2" :class="{selected: selected === 2}">
      <slot name="option3"></slot>
    </button>
    <button @click="selected = 3" v-if="options.length > 3" :class="{selected: selected === 3}">
      <slot name="option4"></slot>
    </button>
    <button @click="selected = 4" v-if="options.length > 4" :class="{selected: selected === 4}">
      <slot name="option5"></slot>
    </button>
  </div>
</template>

<style scoped>
h1{
  text-align: center;
}

.options{
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
}

.options > button{
  background: none;
  color: currentColor;
  border: 2px solid #787878;
  border-radius: 5px;
  padding: 15px;
}

.options > .selected{
  border-color: green;
  background-color: #5c9900;
}

</style>