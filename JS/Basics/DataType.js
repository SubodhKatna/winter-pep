// JavaScript Data Types Examples

// 1. String
let name = "Subodh Katna";
console.log("String:", name); // Output: John Doe

// 2. Number
let age = 30;
let temperature = -5.6;
console.log("Number:", age, "and", temperature); // Output: 30 and -5.6

// 3. Boolean
let isLoggedIn = true;
let hasAccess = false;
console.log("Boolean:", isLoggedIn, "and", hasAccess); // Output: true and false

// 4. Undefined (a variable declared but not assigned a value)
let undefinedVariable;
console.log("Undefined:", undefinedVariable); // Output: undefined

// 5. Null (explicitly set a variable with no value)
let emptyValue = null;
console.log("Null:", emptyValue); // Output: null

// 6. Object (a collection of key-value pairs)
let person = {
  firstName: "Subodh",
  lastName: "Katna",
  age: 28,
  isStudent: true,
};
console.log("Object:", person); // Output: { firstName: "Jane", lastName: "Doe", age: 28, isStudent: true }

// Accessing object properties
console.log("Person's name:", person.firstName); // Output: Jane

// 7. Array (a list of values)
let colors = ["red", "green", "blue"];
console.log("Array:", colors); // Output: [ 'red', 'green', 'blue' ]

// Accessing array elements
console.log("First color:", colors[0]); // Output: red

// 8. Symbol (unique and immutable primitive value)
let symbolExample = Symbol("unique");
console.log("Symbol:", symbolExample); // Output: Symbol(unique)

// 9. BigInt (for integers larger than 2^53 - 1)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber); // Output: 1234567890123456789012345678901234567890n

// Type Checking
console.log("Type of name:", typeof name); // Output: string
console.log("Type of age:", typeof age); // Output: number
console.log("Type of person:", typeof person); // Output: object
console.log("Type of symbolExample:", typeof symbolExample); // Output: symbol
console.log("Type of bigNumber:", typeof bigNumber); // Output: bigint
