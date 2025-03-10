console.log("var: ");
console.log("Value reassignment: ");
var a = 5;
console.log(a);
a = "hello";
console.log(a);

console.log("Hoisted: ");
var firstName; // Hoisted to the top (declared but not assigned)
console.log(firstName); // Output: undefined
firstName = "Alice"; // Now assigned
console.log(firstName); // Output: "Alice"
console.log();

console.log("let: ");
console.log("Value reassignment: ");
let b = 5;
console.log(b);
b = "world";
console.log(b);

console.log("Hoisted: ");
let lastName; // Not hoisted to the top (declared but not assigned)
console.log(lastName); // Output: ReferenceError: lastName is not defined
let lastName2 = "Bob"; // Now assigned
console.log(lastName2); // Output: "Bob"
console.log();

console.log("const: ");
const c = 20;
console.log(c);

// c = 30; // Error: Assignment to constant variable.
console.log();
