export const snippets = [
  {
    initial:
      `const hardToRead = 1000000000;`,
    complete:
      `const hardToRead = 1000000000;

const easyToRead = 1_000_000_000;

console.log(hardToRead === easyToRead); // Output: true

const decimal = 1.333_333;`,
  }
]