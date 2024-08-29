<script setup>
import Cell from './SpreadSheetCell.vue'
import { cells } from './spreadSheetStore.js'

const cols = cells.map((_, i) => String.fromCharCode(65 + i))
</script>

<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th v-for="c in cols">{{ c }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in cells[0].length">
        <th>{{ i - 1 }}</th>
        <td v-for="(c, j) in cols">
          <Cell :r="i - 1" :c="j"></Cell>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  display: block;
  border-collapse: collapse;
  margin: 1rem 0;
  overflow-x: auto;
  text-indent: initial;
  border-spacing: 2px;
  border-color: gray;
  font-size: 1.75rem;
  margin-left: 20%;
}

th {
  color: rgba(255, 255, 255, .87);
  background-color: #2f2f2f;
  padding: 0 1em !important;
  border: 1px solid rgba(84, 84, 84, .65);
}

tr {
  border-top: 1px solid rgba(84, 84, 84, .65);
}

tr:first-of-type th {
  width: 100px;
}

tr:first-of-type th:first-of-type {
  width: 25px;
}

td {
  border: 1px solid #2f2f2f;
  padding: 0 !important;
  min-width: 150px;
}
</style>