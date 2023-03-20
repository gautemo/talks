<script setup lang="ts">
const props = defineProps<{ f?: boolean }>()
</script>

<template>
  <section>
    <header>
      Header (statisk)
      <logos-react v-if="props.f" class="text-3xl"/>
    </header>
    <main>
      Handlekurv (interaktiv)
      <logos-vue v-if="props.f" class="text-3xl"/>
    </main>
    <footer>
      Footer (statisk)
      <logos-svelte-icon v-if="props.f" class="text-3xl"/>
    </footer>
  </section>
</template>

<style scoped>
section {
  border: 10px solid #333;
  background-color: #ffffffb7;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 20px 5px 5px 5px;
  height: 100%;
}


section::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 350px;
  right: 350px;
  height: 10px;
  background-color: #333;
  border-radius: 0 0 5px 5px;
}

header, footer, main {
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}

header, footer {
  background-color: #3333332b;
  flex: 1;
}

main {
  flex: 4;
  background-color: rgba(0, 128, 0, 0.39);
}
</style>