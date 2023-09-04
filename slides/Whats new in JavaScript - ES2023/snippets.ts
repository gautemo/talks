export const snippets = [
  {
    initial:
      `const array = [1, 2, 3, 4, 5]
const lastEven = array.find((n) => n % 2 === 0)
console.log(lastEven)`,
    complete:
      `const array = [1, 2, 3, 4, 5]
const lastEven = array.findLast((n) => n % 2 === 0)
console.log(lastEven)`,
  },
  {
    initial:
      `function findLastIndex(array, predicate) {
  let l = array.length;
  while (l--) {
    if (predicate(array[l], l, array))
      return l;
  }
  return -1;
}

const array = [1, 2, 3, 4, 5]
console.log(findLastIndex(array, (n) => n % 2 === 0))
`,
    complete:
    `const array = [1, 2, 3, 4, 5]
console.log(array.findLastIndex((n) => n % 2 === 0))`,
  },
  {
    initial:
    `const array = [3, 2, 1]
const sorted = array.sort((a, b) => a - b)
console.log(array)
console.log(sorted)`,
    complete:
    `const array = [3, 2, 1]
const sorted = array.toSorted((a, b) => a - b)
console.log(array)
console.log(sorted)`,
  },
  {
    initial:
    `const array = [3, 2, 1]
const reversed = array.reverse()
console.log(array)
console.log(reversed)`,
    complete:
    `const array = [3, 2, 1]
const reversed = array.toReversed()
console.log(array)
console.log(reversed)`,
  },
  {
    initial:
    `const array = ['🍎', '🍌', '🍊']
const myFruit = array.splice(0, 1, '🍏')
console.log(array)
console.log(myFruit)`,
    complete:
    `const array = ['🍎', '🍌', '🍊']
const myFruit = array.toSpliced(0, 1, '🍏')
console.log(array)
console.log(myFruit)`,
  },
  {
    initial:
      `const array = ['a', 'b', 'd']`,
    complete:
    `const array = ['a', 'b', 'd']
const fix = array.with(2, 'c')
console.log(fix)`,
  },
  {
    initial:
      `const symbol1 = Symbol('my-symbol')
const symbol2 = Symbol('my-symbol')
console.log(symbol1 === symbol2)

const cache = new WeakMap()
const key = {}
cache.set(key, 'hello')
console.log(cache.get(key))`,
    complete:
    `const symbol = Symbol('my-symbol')

/* symbol as key */
const weakMap = new WeakMap()
weakMap.set(symbol, 10)
console.log(weakMap.get(symbol))

/* symbol as entry */
const weakSet = new WeakSet()
weakSet.add(symbol)
console.log(weakSet.has(symbol))
const weakRef = new WeakRef(symbol)
console.log(weakRef.deref())

const registry = new FinalizationRegistry((value) => {
  console.log(value)
})

registry.register(symbol, 'weakRef is lost')`,
  },
  {
    initial:
      `#!/usr/bin/env node

console.log('👋')`,
    complete:
    `#!/usr/bin/env node

console.log('👋')`,
  },
]