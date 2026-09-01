---
theme: default
title: What's new in JavaScript - ES2026
info: |
  ## What's new in JavaScript - ES2026
  By [Gaute Meek Olsen](https://gaute.dev)
class: text-center
drawings:
  persist: false
transition: slide-left
comark: true
duration: 10min
routerMode: hash
fonts:
  sans: 'Baloo Chettan, Roboto'
  serif: 'Baloo Chettan, Roboto'
---

<Heart/>

# Nyheter i JavaScript
## ES2026

<style>
  h1,h2{
    transform: rotate(-5deg);
    background-image: linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }

  h2{
    font-size: 3rem;
  }
</style>

---

<div class="row">
  <div class="column">
    <img src="/gaute.avif" class="me">
    <h1>Gaute Meek Olsen</h1>
  </div>
  <img src="/Capra.png" class="capra">
</div>

<style>
.row{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 5rem;
}

.column{
  display: grid;
  place-items: center;
  gap: 10px;
}

img.me{
  height: 320px;
  border-radius: 40px;
  object-fit: contain;
}

img.me:hover {
  content: url("/familie.jpg");
}

img.capra {
  height: 250px;
  object-fit: contain;
}

h1{
  font-size: 3rem;
}
</style>

---

# Upsert

```js {monaco-run} {autorun:false}
const map = new Map()

// if (!map.has('count')) {
//   map.set('count', 0)
// }
const count = map.get('count')
console.log(count)
```

<CopyCode example="upsert"/>

---

# sumPrecise

```js {monaco-run} {autorun:false}
const array = [1, 2, 3, 4, 5]
```

<CopyCode example="sumPrecise"/>

---

# Error.isError

```js {monaco-run} {autorun:false}
const error = new Error('💥')
```

<CopyCode example="isError"/>

---

# Iterator.concat

```js {monaco-run} {autorun:false}
function* sequence1() {
  yield 1
  yield 2
}

function* sequence2() {
  yield 3
  yield 4
}
```

<CopyCode example="concat"/>

---

# fromAsync

```js {monaco-run} {autorun:false}
function returnPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('wait 300 ms for me'), 300)
  })
}

const asyncIterable = async function* () {
  yield await returnPromise()
  yield await returnPromise()
}
```

<CopyCode example="fromAsync"/>

---

# JSON.parse source

```js {monaco-run} {autorun:false}
const json = `{
  "name": "Scrooge McDuck",
  "money": 9007199254740993
}`

const data = JSON.parse(json)
console.log(data.money)
```

<CopyCode example="parse"/>

---

# Uint8Array to/from base64 and hex

```js {monaco-run} {autorun:false}
const arr = new Uint8Array(
  [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
)
```

<CopyCode example="uint8"/>

---

# Takk for meg!

## Recap
<ul>
  <li>https://gaute.dev/talks</li>
  <li>https://gaute.dev/dev-blog</li>
</ul>
