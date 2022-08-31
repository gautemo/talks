export const snippets = [
  {
    initial:
      `(async () => {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  console.log(data.fact);
})();`,
    complete:
      `const response = await fetch('https://catfact.ninja/fact');
const data = await response.json();
console.log(data.fact);`,
  },
  {
    initial:
      `const list = ['🐯', '🐥', '🦞'];
const last = list[list.length - 1];
console.log(last)`,
    complete:
    `const list = ['🐯', '🐥', '🦞'];
const last = list.at(-1);
console.log(last)`,
  },
  {
    initial:
    `function save(data) {
  try { writeToFile(data); } catch (error) {
    throw new Error('Could not write to file');
  }
}

try {
  save('something')
} catch (error) {
  console.error(error)
}`,
    complete:
    `function save(data) {
  try { writeToFile(data); } catch (error) {
    throw new Error('Could not write to file', { cause: error });
  }
}

try {
  save('something')
} catch (error) {
  console.error(error, error.cause)
}`,
  },
  {
    initial:
      `const object = {
  myNumber: 5
}
console.log(object.hasOwnProperty('myNumber'));`,
    complete:
      `const object = {
        myNumber: 5
      }
      console.log(Object.hasOwn(object, 'myNumber'));`,
  },
  {
    initial:
      `const match = /\\d+/.exec('find the number 123 please');
const start = match.index;
console.log(start);`,
    complete:
    `const match = /\\d+/d.exec('find the number 123 please');
const [start, stop] = match.indices[0];
console.log(start, stop);`,
  },
  {
    initial:
      `class Robot {
  constructor() {
    this.name = 'Optimus Prime';
  };
}`,
    complete:
    `class Robot {
  name = 'Optimus Prime';
}`,
  },
  {
    initial:
      `class Robot {
  
}`,
    complete:
    `class Robot {
  #age = 0;

  #increaseAge(addedYears) {
    this.#age += addedYears;
  }
}`,
  },
  {
    initial:
      `class Robot {
  
}`,
    complete:
    `class Robot {
  static price = 999;
  
  static {
    const isSale = new Date().getHours() < 10;
    if(isSale) {
      this.price = 50;
    }
  }
  
  static publicMethod() {
    console.log('public static method called');
  }
}

console.log(Robot.price);`,
  },
]