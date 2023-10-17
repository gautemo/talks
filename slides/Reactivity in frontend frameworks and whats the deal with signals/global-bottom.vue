<script setup lang="ts">
import Footer from './components/Footer.vue'
</script>

<template>
  <Footer :page="$page" :total-pages="$slidev.nav.total"/>
</template>