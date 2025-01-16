const x = [1, 2]; // an array
const y = {
  key: "pair",
  date: new Date(),
  generateDate() {
    this.date = new Date();
  },
}; // a key value pair or a dictionary or subject

console.log(x, typeof x);
console.log(y, typeof y);
y.generateDate();
console.log(y);

let person1 = {};
person.age = 20;
person.name = {};
person.name.first = "John";
person.name.last = "River";
person.name.updateFirstName = function (x) {
  this.first = x;
};
console.log(person);
person.name.updateFirstName("Jonathan");
console.log(person);

// type Person = {
//   age: number;
//   name: {
//     first: string;
//     last: string;
//     updateFirstName: Function;
//   };
// };

// let person: Person = {
//   age: 20,
//   name: {
//     first: "Ofonime",
//     last: "Eno",
//     updateFirstName: function (x: string) {
//       this.first = x;
//     },
//   },
// };

console.log(person);
person.name.updateFirstName("Jonathan");
console.log(person);

//Or declare them already so the type inference will do the work for you if you don't want to create a custom data type.
let person2 = {
  age: 20,
  name: {
    first: "John",
    last: "River",
    updateFirstName: function (x: string) {
      this.first = x;
    },
  },
};
console.log(person2);
person.name.updateFirstName("Jonathan");
console.log(person2);
console.log(typeof person2);

// Another approach is using OOP using classes to define objects. For example, you can replace the same code with the following code.
class Person {
  public age: number;
  public name: {
    first: string;
    last: string;
    updateFirstName: Function;
  };
  constructor(age: number, firstName: string, lastName: string) {
    this.age = age;
    this.name = {
      first: firstName,
      last: lastName,
      updateFirstName: (x: string) => {
        this.name.first = x;
      },
    };
  }
}

let person3 = new Person(20, "John", "River");
console.log(person3);
person3.name.updateFirstName("Jonathan");
console.log(person3);
console.log(typeof person3);

// You cannot do this if you only write the type (or interface which will be discussed in Quest 3).
