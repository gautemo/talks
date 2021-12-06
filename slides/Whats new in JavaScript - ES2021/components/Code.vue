<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { EditorView, keymap, highlightSpecialChars } from "@codemirror/view"
import { oneDark } from "@codemirror/theme-one-dark"
import { javascript } from "@codemirror/lang-javascript"
import { EditorState } from "@codemirror/state"
import { history, historyKeymap } from "@codemirror/history"
import { indentOnInput } from "@codemirror/language"
import { defaultKeymap } from "@codemirror/commands"
import { closeBrackets, closeBracketsKeymap } from "@codemirror/closebrackets"
import { snippets } from '../snippets'

const props = defineProps<{
  snippetId: number
}>()

const snippet = snippets[props.snippetId];
let view: EditorView | null = null

const outputTimeout = ref(-1)
const output = ref([])
const runCode = async () => {
  clearTimeout(outputTimeout.value);
  const startFunc = `
  const output = [];
  try{`;
  const endFunc = `
  }catch(error){
    output.push("error: " + (error.message ?? error));
  }
  return output;
  `;
  const manipCode = view.state.doc.toJSON().join('\n').replace(
    /console\.log\(/gi,
    "output.push("
  );
  try {
    const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
    const fun = new AsyncFunction(startFunc + manipCode + endFunc);
    output.value = await fun(this);
  } catch (error) {
    output.value.push("error: " + error.message);
  }
  outputTimeout.value = setTimeout(() => (output.value = []), 6000);
}

const updateCode = (code: string) => {
  const transaction = view.state.update({ changes: { from: 0, to: view.state.doc.length, insert: code } })
  view.dispatch(transaction);
}

const setup = [
  highlightSpecialChars(),
  // drawSelection(),
  // highlightActiveLine(),
  indentOnInput(),
  history(),
  closeBrackets(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...historyKeymap,
    {
      key: 'Mod-Space',
      run: () => runCode() && true,
    },
    {
      key: 'Mod-Shift-r',
      run() {
        updateCode(snippet.initial)
        return true;
      }
    },
    {
      key: 'Mod-Shift-c',
      run() {
        updateCode(snippet.complete)
        return true;
      }
    },
    {
      key: 'Escape',
      run() {
        output.value = []
        return true;
      }
    },
  ])
]

onMounted(() => {
  const codeEl = document.querySelector(`#code-${props.snippetId}`)
  if (codeEl && !codeEl.innerHTML) {
    view = new EditorView({
      state: EditorState.create({ extensions: [setup, oneDark, javascript()], doc: snippet.initial }),
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
  <div class="container">
    <div :id="`code-${snippetId}`" class="code"></div>
    <div class="control">
      <div @click="() => updateCode(snippet.initial)" title="Refresh. Ctrl + Shift + R">
        <ic-round-refresh />
      </div>
      <div @click="() => updateCode(snippet.complete)" title="Complete. Ctrl + Shift + C">
        <ic-round-code />
      </div>
      <div @click="() => runCode()" title="Run. Ctrl + Space">
        <ic-round-play-arrow />
      </div>
    </div>
  </div>
  <transition name="fade">
    <div v-if="output.length > 0" class="output">
      <p
        :class="{ err: typeof o === 'string' && o.startsWith('error:') }"
        v-for="o of output"
        :key="o"
      >{{ o }}</p>
    </div>
  </transition>
  <div tabindex="0"></div>
</template>

<style scoped>
.container{
  height: 100%;
  position: relative;
}

.code {
  font-size: 1.2em;
  height: 100%;
}

:deep(.cm-editor) {
  height: 100%;
  padding: 25px;
  border-radius: 12px;
  box-shadow: -7px 7px 8px 1px rgba(0, 0, 0, 0.4);
}

:deep(.cm-scroller)::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

:deep(.cm-scroller)::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #7d8799;
}

.output {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  z-index: 55;
  font-size: 2.2rem;
  pointer-events: none;
}

.output p {
  padding: 10px 30px 10px 70px;
  margin: 0;
  background: rgba(255, 255, 0, 0.9);
  color: black;
  pointer-events: none;
  line-height: 2.2rem;
}
.output p.err {
  background: rgb(219, 44, 21, 0.9);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.control {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
}

.control > div {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  height: 30px;
  width: 30px;
  border: 1px solid rgb(100, 100, 100);
  cursor: pointer;
}
</style>