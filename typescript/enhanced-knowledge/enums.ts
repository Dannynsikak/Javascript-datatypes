enum State {
  on, // 0
  off, // 1
}

const status: State = State.on;

console.log(status);
console.log(State.off);

// In TypeScript, enums (short for "enumerations") are a way to define a set of named constants. Enums allow you to declare a collection of related values, and they provide a more readable and maintainable way to work with constant values, particularly when these values are logically grouped together.

enum CustomState {
  on = "Activated",
  off = "Deactivated",
}

const customStatus: CustomState = CustomState.off;
console.log(customStatus);

enum CrazyEnum {
  off = 15,
  on = "true",
}

const crazyVar: CrazyEnum = CrazyEnum.on;
console.log(crazyVar, CrazyEnum.off);
