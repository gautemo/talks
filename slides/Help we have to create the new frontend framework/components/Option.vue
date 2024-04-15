<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ text: string, disabled?: boolean }>()

const selected = ref(false)
</script>

<template>
  <section>
    <div @click="selected = !selected" :class="{ selected: selected, disabled: disabled }">
      {{ text }}
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
section {
  display: inline-block;
  margin: 1rem;
}

div {
  border: 5px solid white;
  font-size: 1.2rem;
  border-radius: 10px;
  padding: 10px;
  min-width: 200px;
  height: 100%;
  min-height: 100px;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.disabled {
  opacity: 0.7;
  border: 5px solid gray;
  cursor: not-allowed
}

.selected {
  border: 5px solid rgb(60, 255, 0);
  font-weight: bold;
}

label {
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
}

@supports (background: paint(houdini)) {
  @property --opacity {
    syntax: "<number>";
    initial-value: 0.5;
    inherits: false;
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes opacityChange {
    to {
      --opacity: 1;
    }
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  div:hover:not(.disabled):not(.selected) {
    border: 5px solid transparent;
    border-image: conic-gradient(from var(--angle),
        white 0deg 90deg,
        white 90deg 180deg,
        rgb(60, 255, 0) 180deg 270deg,
        rgb(60, 255, 0) 270deg 360deg) 1 stretch;
    animation: rotate 4s linear infinite, opacityChange 3s infinite alternate;
  }
}
</style>