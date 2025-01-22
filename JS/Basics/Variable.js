// Declaring variables using let, const, and var

// Using let (preferred for variables that can change)
let name = "Subodh"; 
let age = 19;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Changing the value of a let variable
age = 20;
console.log("Updated Age:", age);

// Using const (preferred for variables that should not change)
const PI = 3.14; 
console.log("Value of PI:", PI);

// Uncommenting the following line will throw an error because PI is a constant
// PI = 3.14159;

// Using var (legacy way, avoid in modern JavaScript)
var country = "India";
console.log("Country:", country);

// Re-declaring a var variable (not recommended)
var country = "USA";
console.log("Updated Country:", country);

// Example of using variables in an operation
let radius = 5;
let area = PI * radius * radius;
console.log("Area of the circle:", area);
