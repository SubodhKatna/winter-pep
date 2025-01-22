// 1. typeof Operator
let number = 42;
console.log("typeof number:", typeof number); // Output: "number"

// 2. delete Operator
let person = { name: "Subodh", age: 25 };
delete person.age;
console.log("Person after deletion:", person); // Output: { name: 'Alice' }

// 3. in Operator
let car = { make: "Toyota", model: "Corolla" };
console.log("'make' in car:", "make" in car); // Output: true
console.log("'color' in car:", "color" in car); // Output: false

// 4. instanceof Operator
class Animal {}
class Dog extends Animal {}
let dog = new Dog();
console.log("dog instanceof Dog:", dog instanceof Dog); // Output: true
console.log("dog instanceof Animal:", dog instanceof Animal); // Output: true

// 5. void Operator
let result = void 0; // Equivalent to undefined
console.log("Result of void 0:", result); // Output: undefined

// 6. new Operator
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person1 = new Person("Mayank", 30);
console.log("New person object:", person1); // Output: Person { name: 'Bob', age: 30 }

// 7. this Keyword
let obj = {
  name: "Katna",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
obj.greet(); // Output: "Hello, Alice"

// 8. with Operator (use cautiously)
let person2 = { name: "Subodh", age: 28 };
with (person2) {
  console.log("Name:", name); // Output: "John"
  console.log("Age:", age);   // Output: 28
}
