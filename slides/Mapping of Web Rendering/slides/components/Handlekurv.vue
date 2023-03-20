<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ 
  empty: boolean,
  items?: string[],
  navig?: boolean,
  pre?: string,
  route?: number,
  loading?: boolean,
  static?: boolean,
}>()
const items = ref(props.items ?? [])
const add = ref(props.pre ?? '')

function save() {
  if(props.static) return
  items.value.push(add.value)
  add.value = ''
}

const route = ref(props.route ?? 0)
</script>

<template>
  <main>
    <template v-if="!props.empty">
      <nav v-if="props.navig">
        <button @click="route = 0">Handle</button>
        <button @click="route = 1">Oppskrifter</button>
      </nav>
      <template v-if="route === 0">
        <h1>Min handleliste</h1>
        <form @submit.prevent="save">
          <label>
            <span>Legg til</span>
            <input type="text" v-model="add">
          </label>
          <button>Lagre</button>
        </form>
        <ul v-if="!loading">
          <li v-for="item in items">{{ item }}</li>
        </ul>
        <svg-spinners-6-dots-rotate v-else class="text-3xl"/>
      </template>
      <template v-if="route === 1">
        <ul>
          <li><a>Rød Karri</a></li>
          <li><a>Grov Pizza</a></li>
          <li><a>Ostepai</a></li>
          <li><a>Vårruller</a></li>
          <li><a>Rødbetburger med grønnkål</a></li>
        </ul>
      </template>
    </template>
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
  min-width: 390px;
  padding: 1em;
  border-radius: 10px;
  border: 3px solid #2b6daf;
  font-family: 'Architects Daughter', handwriting;
}

h1 {
  font-size: 1.2em !important;
  line-height: 1.2em !important;
  color: #2b6daf;
  margin-bottom: 0 !important;
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

nav {
  display: flex;
  gap: 0.25rem;
}

nav button {
  background-color: #2baf6f;
  padding: 0 0.5em;
}
</style>