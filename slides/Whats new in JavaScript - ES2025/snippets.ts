export const snippets = [
  {
    initial:
      `const a = new Set([1,2])
const b = new Set([2,3])`,
    complete:
      `const a = new Set([1, 2])
const b = new Set([2, 3])
const result = a.intersection(b)
console.log(result)`,
  },
  {
    initial:
      `const iter = {}`,
    complete:
    `const iter = {
  count: 0,
  next() {
    this.count++
    return {
      value: this.count,
      done: this.count >= 3,
    }
  }
}

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())`,
  },
  {
    initial:
    `const iter = {
  count: 0,
  next() {
    this.count++
    return {
      value: this.count,
      done: this.count >= 3,
    }
  }
}`,
    complete:
    `const iter = {
  count: 0,
  next() {
    this.count++
    return {
      value: this.count,
      done: this.count >= 3,
    }
  },
  [Symbol.iterator]() {
    return this
  }
}

for(const i of iter) {
  console.log(i)
}`,
  },
  {
    initial:
    ``,
    complete:
    `function* cards() {
  const suits = ["♣️", "♦️", "♥️", "♠️"]
  const court = ["J", "Q", "K", "A"]
  for(const suit of suits) {
    for(let i = 2; i <= 10; i++) yield suit + i
    for(const c of court) yield suit + c
  }
}

console.log([...cards()])`,
  },
  {
    initial:
    `function* sequence() {
  yield 1
  yield 2
}
  
const values = sequence()
console.log(values.next())
console.log(values.next())`,
    complete:
    `function* sequence() {
  yield 1
  yield 2
}
  
const values = sequence().map(v => v * 2)
console.log(values.next())
console.log(values.next())`,
  },
  {
    initial:
      `function fun() {
  return 1
}`,
    complete:
    `function fun() {
  return 1
}

Promise.try(fun)
  .then(value => console.log(value))
  .catch(error => console.error(error))`,
  },
  {
    initial:
      `const match = 'Donald Duck'
  .match(/(?<name>\\w+)\\s(?<name>\\w+)/)
console.log(match.groups.name)`,
    complete:
    `const match = 'Duck, Donald'
  .match(/\\w+\\s(?<surname>\\w+)|(?<surname>\\w+),\\s\\w+/)
console.log(match.groups.surname)`,
  },
  {
    initial:
      `const re = /^Hello\\sJavaZone$/
console.log(re.test('Hello JavaZone'))`,
    complete:
    `const re = /^Hello\\s(?i:J)ava(?i:Z)one$/
console.log(re.test('Hello javazone'))`,
  },
  {
    initial:
      `const re = new RegExp('Hello JavaZone.')
console.log(re.test('Hello JavaZone!'))`,
    complete:
    `const re = new RegExp(RegExp.escape('Hello JavaZone.'))
console.log(re.test('Hello JavaZone!'))`,
  },
  {
    initial:
      `const float16 = new Float16Array(2)
float16[0] = 42
console.log(float16[0])`,
    complete:
    `const float16 = new Float16Array(2)
float16[0] = 66_000
console.log(float16[0])`,
  },
]