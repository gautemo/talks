<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{static?: boolean, preffilled?: boolean}>()
const items = ref<string[]>(props.preffilled ? ['Pizza', 'Is'] : [])
const add = ref('')

function save() {
  items.value.push(add.value)
  add.value = ''
}
</script>

<template>
  <main>
    <h1>{{props.static ? 'Anbefalt handleliste' : 'Min handleliste'}}</h1>
    <form @submit.prevent="save" v-if="!props.static">
      <label>
        <span>Legg til</span>
        <input type="text" v-model="add">
      </label>
      <button>Lagre</button>
    </form>
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </main>
</template>

<style scoped>
@import url(https://fonts.bunny.net/css?family=architects-daughter:400);

form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 5px;
}

main {
  background-color: #fbfafa;
  width: fit-content;
  padding: 1em;
  border-radius: 10px;
  border: 3px solid #2b6daf;
  font-family: 'Architects Daughter', handwriting;
}

h1 {
  font-size: 1.5em !important;
  color: #2b6daf;
}

label {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px;
}

span {
  white-space: nowrap;
}

input {
  background-color: inherit;
  border-bottom: 1px solid #333;
  outline: none;

}

button {
  background-color: #2b6daf;
  color: #fbfafa;
  padding: 0.1em 0.5em;
  border-radius: 5px;
}
</style>