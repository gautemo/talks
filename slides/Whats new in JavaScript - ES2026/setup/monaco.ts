import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      fontSize: 20,
      hover: {
        enabled: 'off',
      },
      parameterHints: {
        enabled: false
      },
      quickSuggestions: false,
      suggestOnTriggerCharacters: false,
      contextmenu: false,
    }
  }
})