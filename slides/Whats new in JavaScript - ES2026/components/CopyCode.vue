<script setup lang="ts">
const examples = {
  upsert: `const map = new Map()

console.log(map.getOrInsert('count', 0))
console.log(map.getOrInsertComputed('date', () => Date.now()))`,
  sumPrecise: `const array = [1, 2, 3, 4, 5]
const sum = Math.sumPrecise(array)
console.log(sum)

let values = [1e20, 0.1, -1e20]
console.log(values.reduce((a, b) => a + b, 0)) // 0
console.log(Math.sumPrecise(values)) // 0.1`,
  isError: `const error = new Error('💥')
console.log(Error.isError(error))
console.log(Error.isError('error'))`,
  fromAsync: `function returnPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('wait 300 ms for me'), 300)
  })
}

const asyncIterable = async function* () {
  yield await returnPromise()
  yield await returnPromise()
}

const array = await Array.fromAsync(asyncIterable())
console.log(array)`,
  concat: `function* sequence1() {
  yield 1
  yield 2
}

function* sequence2() {
  yield 3
  yield 4
}

const joined = Iterator.concat(sequence1(), sequence2(), [5, 6])

console.log(...joined)`,
  parse: `const json = \`{
  "name": "Scrooge McDuck",
  "money": 9007199254740993
}\`

const data = JSON.parse(json, (key, value, { source }) => {
  if (key === 'money') {
    return BigInt(source)
  }
  return value
})
console.log(data.money)`,
  uint8: `const arr = new Uint8Array(
  [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
)
console.log(arr.toBase64())
console.log(arr.toHex())

console.log(Uint8Array.fromBase64('SGVsbG8gV29ybGQ='))
console.log(Uint8Array.fromHex('48656c6c6f20576f726c64'))`,
} as const

const props = defineProps<{ example: keyof typeof examples }>()

function copy() {
  navigator.clipboard.writeText(examples[props.example])
    .catch(err => console.error('Failed to copy text: ', err))
}
</script>

<template>
  <button title="copy full example" @click="copy">
    <>
  </button>
</template>

<style scoped>
button {
  color: #43CBFF;
  position: absolute;
  top: 50px;
  right: 65px;
}
</style>