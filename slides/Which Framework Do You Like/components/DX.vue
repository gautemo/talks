<script setup lang="ts">
import { dx } from './firebase';
</script>

<template>
<table>
  <thead>
    <th></th>
    <th>Poeng</th>
  </thead>
  <tbody>
    <tr v-for="fw in dx" :key="fw.name">
      <td>{{fw.name}}</td>
      <td>{{fw.points}} 🏅</td>
    </tr>
  </tbody>
</table>
</template>