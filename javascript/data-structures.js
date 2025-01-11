const x = [1, 2]; // an array
const y = {
  key: "pair",
  date: new Date(),
  generateDate() {
    this.date = new Date();
  },
}; // a key-value pair or a dictionary or project

console.log(x, typeof x);
console.log(y, typeof y);
y.generateDate();
console.log(y);

let person = {};
person.age = 20;
person.name = {};
person.name.first = "John";
person.name.last = "River";
person.name.updateFirstName = function (x) {
  this.first = x;
};
person.name.updateLastname = function (x) {
  this.last = x;
};
console.log(person);
person.name.updateFirstName("Jonathan");
console.log(person);
person.name.updateLastname("Eno");
console.log(person);
