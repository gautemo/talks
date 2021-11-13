export const snippets = [
  {
    initial:
      `const hardToRead = 1000000000;`,
    complete:
      `const hardToRead = 1000000000;

const easyToRead = 1_000_000_000;
console.log(hardToRead === easyToRead);
const decimal = 1.333_333;`,
  },
  {
    initial:
      `const apples = '🍏🍏🍏';
const oranges = apples.replace('🍏', '🍊');
console.log(oranges)`,
    complete:
      `const apples = '🍏🍏🍏';
const oranges = apples.replaceAll('🍏', '🍊');
console.log(oranges)`,
  },
  {
    initial:
    `const slow = () => new Promise(resolve => {
      setTimeout(() => resolve('slow'), 2_000);
    });
    const fast = () => new Promise(resolve => {
      setTimeout(() => resolve('fast'), 500);
    });
    const fail = () => new Promise((_, reject) => reject('nope'));
    
    const promises = [
      slow(),
      fast(),
      fail(),
    ];
    const result = await Promise.race(promises);
    console.log(result);
    `,
    complete:
    `const slow = () => new Promise(resolve => {
      setTimeout(() => resolve('slow'), 2_000);
    });
    const fast = () => new Promise(resolve => {
      setTimeout(() => resolve('fast'), 500);
    });
    const fail = () => new Promise((_, reject) => reject('nope'));
    
    const promises = [
      slow(),
      fast(),
      fail(),
    ];
    const first = await Promise.any(promises);
    console.log(first); 
    `,
  },
  {
    initial:
      ``,
    complete:
      `const obj = {
  value: 0,
  get y() {
    return this.value;
  },
  set y(value){
    console.log('side-effect');
    this.value = value;
  }
}

obj.y ??= 99;
obj.y = obj.y ?? 99;`,
  },
  {
    initial:
      `const cacheRef = new WeakRef({ count: 0 });`,
    complete:
      `const cacheRef = new WeakRef({ count: 0 });

const cache = cacheRef.deref();
if(cache){
  console.log(cache.count);
} else {
  console.log('object lost to garbage-collection');
}

// FinalizationRegistry let's you assign a callback if object is garbage-collected
const registry = new FinalizationRegistry((value) => {
  console.log(value);
});
registry.register(cacheRef.deref(), 'cacheRef is lost');`,
  },
]