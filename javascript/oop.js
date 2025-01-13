class Animal {
  constructor(name) {
    if (name === undefined) return (this.name = "Unknown");
    return (this.name = name);
  }
}

const newAnimal = new Animal("weird");
console.log(newAnimal);
