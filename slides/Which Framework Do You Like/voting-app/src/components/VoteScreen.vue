<script setup lang="ts">
import { ref, watch } from 'vue'
import { vote } from '../firebase'

const props = defineProps<{
  title: string,
  votekey: string,
  options: string[],
}>()

const selected = ref<number>(-1)
watch(selected, () => {
  vote(props.votekey, props.options[selected.value])
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
  border: 2px solid rgb(139, 139, 0);
  border-radius: 5px;
  padding: 5px;
}

.options > .selected{
  border-color: green;
  background-color: greenyellow;
}

</style>