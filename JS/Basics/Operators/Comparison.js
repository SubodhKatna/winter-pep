// Comparison Operators in JavaScript

let num1 = 10;
let num2 = 5;
let num3 = "10";

console.log("Values: num1 =", num1, ", num2 =", num2, ", num3 =", num3);

// Equal to (==)
console.log("num1 == num3:", num1 == num3); // Output: true (checks value, not type)

// Strict equal to (===)
console.log("num1 === num3:", num1 === num3); // Output: false (checks value and type)

// Not equal to (!=)
console.log("num1 != num2:", num1 != num2); // Output: true

// Strict not equal to (!==)
console.log("num1 !== num3:", num1 !== num3); // Output: true

// Greater than (>)
console.log("num1 > num2:", num1 > num2); // Output: true

// Less than (<)
console.log("num1 < num2:", num1 < num2); // Output: false

// Greater than or equal to (>=)
console.log("num1 >= num2:", num1 >= num2); // Output: true

// Less than or equal to (<=)
console.log("num1 <= num2:", num1 <= num2); // Output: false

// Comparing with different types
let isTrue = true;
console.log("isTrue == 1:", isTrue == 1); // Output: true
console.log("isTrue === 1:", isTrue === 1); // Output: false
