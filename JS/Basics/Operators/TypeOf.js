// typeof Operator

let num = 10;
let str = "Hello";
let isTrue = true;
let obj = {name: "John"};
let arr = [1, 2, 3];
let func = function() { return "Hello"; };
let nul = null;
let undef;

console.log("Type of num:", typeof num); // Output: "number"
console.log("Type of str:", typeof str); // Output: "string"
console.log("Type of isTrue:", typeof isTrue); // Output: "boolean"
console.log("Type of obj:", typeof obj); // Output: "object"
console.log("Type of arr:", typeof arr); // Output: "object" (arrays are also objects in JavaScript)
console.log("Type of func:", typeof func); // Output: "function"
console.log("Type of nul:", typeof nul); // Output: "object" (this is a known issue in JavaScript)
console.log("Type of undef:", typeof undef); // Output: "undefined"


// instanceof Operator

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  let person1 = new Person("Alice");
  
  console.log("person1 instanceof Person:", person1 instanceof Person); // Output: true
  console.log("person1 instanceof Object:", person1 instanceof Object); // Output: true
  
  let arr1 = [1, 2, 3];
  console.log("arr instanceof Array:", arr1 instanceof Array); // Output: true
  console.log("arr instanceof Object:", arr1 instanceof Object); // Output: true
  