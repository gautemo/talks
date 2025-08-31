<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import VennDiagramSvg from './VennDiagramSvg.vue';

const diagram = ref(0)
const modal = useTemplateRef<HTMLDialogElement>('modal')

function openDialog() {
  modal.value?.showModal()
}
</script>

<template>
  <div @click="openDialog" class="preview">
    <VennDiagramSvg :index="diagram" :height="50"/>
  </div>
  <dialog ref="modal" @click="modal?.close()">
    <div @click.stop>
      <div class="buttons">
        <button @click="diagram = 1" :class="{ active: diagram === 1 }">Intersection</button>
        <button @click="diagram = 2" :class="{ active: diagram === 2 }">Union</button>
        <button @click="diagram = 3" :class="{ active: diagram === 3 }">Difference</button>
        <button @click="diagram = 4" :class="{ active: diagram === 4 }">Symmetric difference</button>
        <button @click="diagram = 5" :class="{ active: diagram === 5 }">Subset</button>
        <button @click="diagram = 6" :class="{ active: diagram === 6 }">Superset</button>
        <button @click="diagram = 7" :class="{ active: diagram === 7 }">Disjoint</button>
      </div>
      <VennDiagramSvg :index="diagram" :height="250"/>
    </div>
  </dialog>
</template>

<style scoped>
.preview {
  cursor: pointer;
  margin-bottom: 10px;
}

.preview svg {
  width: 100px;
}

dialog::backdrop {
  background: rgba(126, 126, 126, 0.4);
}

dialog {
  border: none;
  box-shadow: 0 4px 10px 2px #333;
  padding: 0rem;
  height: 500px;
  width: 600px;
  overflow: auto;
  border-radius: 5px;
}

dialog > div {
  padding: 1rem;
  width: 100%;
  height: 100%;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
}

.buttons button {
  border: 2px solid currentColor;
  padding: 5px 10px;
  border-radius: 2px;
}

.buttons button.active {
  background-color: #00ff0065;
}

dialog :deep(svg) {
  margin: 25px auto;
}
</style>