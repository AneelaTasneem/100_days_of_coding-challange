"use strict";
//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Using lt to reassign value:
let dressColor = "red";
dressColor = "blue";
console.log(dressColor); // Shows reassigned value i.e, blue:
const shapesName = "circle";
shapesName = "triangle"; // Thia line caused error:
console.log(Error, "Can't assign shapeName because it is a constant.");
