// Bitwise Operators in JavaScript

let num1 = 5;  // Binary: 0101
let num2 = 3;  // Binary: 0011

console.log("Values: num1 =", num1, ", num2 =", num2);

// Bitwise AND (&)
let andResult = num1 & num2; // 0101 & 0011 = 0001 (1 in decimal)
console.log("num1 & num2:", andResult); // Output: 1

// Bitwise OR (|)
let orResult = num1 | num2; // 0101 | 0011 = 0111 (7 in decimal)
console.log("num1 | num2:", orResult); // Output: 7

// Bitwise XOR (^)
let xorResult = num1 ^ num2; // 0101 ^ 0011 = 0110 (6 in decimal)
console.log("num1 ^ num2:", xorResult); // Output: 6

// Bitwise NOT (~)
let notResult = ~num1; // ~0101 = 1010 (inverts bits)
console.log("~num1:", notResult); // Output: -6 (due to Two's complement representation)

// Bitwise Left Shift (<<)
let leftShiftResult = num1 << 1; // Shift left by 1: 0101 becomes 1010 (10 in decimal)
console.log("num1 << 1:", leftShiftResult); // Output: 10

// Bitwise Right Shift (>>)
let rightShiftResult = num1 >> 1; // Shift right by 1: 0101 becomes 0010 (2 in decimal)
console.log("num1 >> 1:", rightShiftResult); // Output: 2

// Bitwise Unsigned Right Shift (>>>)
let unsignedRightShiftResult = num1 >>> 1; // Similar to >> but fills with 0 instead of sign bit
console.log("num1 >>> 1:", unsignedRightShiftResult); // Output: 2
