// Logical Operators in JavaScript

let a = true;
let b = false;

console.log("Values: a =", a, ", b =", b);

// Logical AND (&&)
let andResult = a && b; // Both must be true
console.log("a && b:", andResult); // Output: false

// Logical OR (||)
let orResult = a || b; // At least one must be true
console.log("a || b:", orResult); // Output: true

// Logical NOT (!)
let notA = !a; // Reverses the value of 'a'
console.log("!a:", notA); // Output: false

// Using logical operators in a condition
let age = 20;
let hasPermission = true;

// Check if age is over 18 AND has permission
let canEnter = age > 18 && hasPermission;
console.log("Can Enter:", canEnter); // Output: true

// Check if age is under 18 OR has permission
let canLeave = age < 18 || hasPermission;
console.log("Can Leave:", canLeave); // Output: true

// Check if not hasPermission
let notAllowed = !hasPermission;
console.log("Not Allowed:", notAllowed); // Output: false
