function plus(
  x: number | string | undefined,
  y: number | string | undefined
): number | string | undefined {
  if (x === undefined || y === undefined) {
    return undefined; // Return undefined if either parameter is undefined
  }
  if (typeof x === "number" && typeof y === "number") {
    return x + y; // Add numbers
  }
  if (typeof x === "string" && typeof y === "string") {
    return x + y; // concantenate strings
  }
  return undefined; // return undefined if types are incompatible
}

console.log(plus(2025, 1));
console.log(plus(undefined, 21));
console.log(plus("Ofonime", "Nsikak"));
