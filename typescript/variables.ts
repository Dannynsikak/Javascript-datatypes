// variables in typescript
let foo1 = "Hi";
{
  var foo2 = "Hello";
  let foo1 = "GoodBye!";
  const foo3 = "I am only here";
  let foo4 = "I am only here as well";
}

console.log(foo1, foo2);
