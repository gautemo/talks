import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(require.resolve('./night-owl/default.json')),
      light: await loadTheme(require.resolve('./night-owl/light.json')),
    },
  }
})