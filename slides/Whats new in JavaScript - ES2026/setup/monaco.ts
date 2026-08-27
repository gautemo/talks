import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      fontSize: 20,
      hover: {
        enabled: 'off',
      }
    }
  }
})