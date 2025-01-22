// String Operators in JavaScript

let str1 = "Hello";
let str2 = "World";

console.log("Strings:", str1, "and", str2);

// String Concatenation (+)
let concatenated = str1 + " " + str2;
console.log("Concatenation (str1 + str2):", concatenated); // Output: "Hello World"

// Concatenation with other data types
let num = 2025;
let greeting = str1 + " " + num;
console.log("Concatenation with number:", greeting); // Output: "Hello 2025"

// Using += operator for concatenation
let message = "Good";
message += " Morning"; // Same as message = message + " Morning"
console.log("Using += for concatenation:", message); // Output: "Good Morning"

// String Length property
let strLength = str1.length;
console.log("Length of str1:", strLength); // Output: 5

// Accessing individual characters of a string (using index)
let firstChar = str1[0];
console.log("First character of str1:", firstChar); // Output: "H"

// Checking if a string contains a substring (includes method)
let containsWorld = concatenated.includes("World");
console.log("Contains 'World' in concatenated string:", containsWorld); // Output: true

// Extracting a part of a string (substring method)
let substring = str1.substring(1, 4); // Extracts from index 1 to 3
console.log("Substring of str1 (from index 1 to 4):", substring); // Output: "ell"
