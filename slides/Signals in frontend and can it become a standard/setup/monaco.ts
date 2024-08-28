import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  return {
    editorOptions: {
      fontSize: 18,
    }
  }
})