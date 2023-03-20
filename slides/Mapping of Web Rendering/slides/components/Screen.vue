<script setup lang="ts">
import GearWork from './GearWork.vue';
import Handlekurv from './Handlekurv.vue';
const props = defineProps<{
  empty?: boolean,
  items?: string[],
  work?: boolean,
  nav?: boolean,
  pre?: string,
  route?: number,
  loading?: boolean,
  static?: boolean,
}>()
</script>

<template>
  <section>
    <Handlekurv
      :empty="props.empty"
      :items="props.items"
      :navig="props.nav"
      :pre="props.pre"
      :route="props.route"
      :loading="props.loading"
      :static="props.static"
    />
    <div>
      <slot></slot>
    </div>
    <div class="work" v-if="props.work">
      <GearWork :size="50"/>
    </div>
  </section>
</template>

<style scoped>
section {
  border: 10px solid #333;
  background-color: #ffffffb7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 20px 5px 5px 5px;
}


section::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 110px;
  right: 110px;
  height: 15px;
  background-color: #333;
  border-radius: 0 0 5px 5px;
}

.work{
  position: absolute;
  right: 5px;
  bottom: 5px;
}
</style>