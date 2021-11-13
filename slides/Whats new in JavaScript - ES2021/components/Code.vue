<script setup lang="ts">
import { onMounted } from 'vue'
import {EditorView, keymap, highlightSpecialChars, drawSelection, highlightActiveLine} from "@codemirror/view"
import { oneDark } from "@codemirror/theme-one-dark"
import {javascript} from "@codemirror/lang-javascript"
import {EditorState} from "@codemirror/state"
import {history, historyKeymap} from "@codemirror/history"
import {indentOnInput} from "@codemirror/language"
import {lineNumbers, highlightActiveLineGutter} from "@codemirror/gutter"
import {defaultKeymap} from "@codemirror/commands"
import {closeBrackets, closeBracketsKeymap} from "@codemirror/closebrackets"
import { snippets } from '../snippets.ts'

const props = defineProps<{
  snippetId: number
}>()

let view: EditorView | null = null

const setup = [
  highlightSpecialChars(),
  // drawSelection(),
  highlightActiveLine(),
  indentOnInput(),
  history(),
  closeBrackets(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...historyKeymap,
  ])
]

onMounted(() => {
  const codeEl = document.querySelector('#code')
  if(codeEl && !codeEl.innerHTML){
    view = new EditorView({
      state: EditorState.create({extensions: [setup, oneDark, javascript()], doc: snippets[props.snippetId].initial}),
      parent: codeEl,
    })
    view.contentDOM.setAttribute('data-gramm', 'false');
    view.contentDOM.setAttribute('data-gramm_editor', 'false');
    view.contentDOM.setAttribute('data-enable-grammarly', 'false');
    view.contentDOM.classList.add('CodeMirror-code')
  }
})
</script>

<template>
  <div id="code"></div>
</template>

<style scoped>
#code{
  font-size: 1.2em;
  height: 100%;
}

:deep(.cm-editor){
  height: 100%;
  padding: 25px;
  border-radius: 12px;
  box-shadow: -7px 7px 8px 1px rgba(0, 0, 0, 0.4);
}

:deep(.cm-scroller)::-webkit-scrollbar
{
	width: 5px;
}

:deep(.cm-scroller)::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color: #7d8799;
}
</style>