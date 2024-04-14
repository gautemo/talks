import { ref } from 'vue'

export const todo = ref<{ name: string, checked: boolean }[]>([
  { name: 'Components', checked: false },
  { name: 'Events', checked: false },
  { name: 'Reactivity', checked: false },
  { name: 'Props', checked: false },
  { name: 'Dynamic DOM', checked: false },
  { name: 'Lifecycle hooks', checked: false },
  { name: 'Styling', checked: false },
  { name: 'Routing', checked: false },
  { name: 'TypeScript support', checked: false },
  { name: 'SSG', checked: false },
  { name: 'SSR', checked: false },
  { name: 'Developer tools', checked: false },
])