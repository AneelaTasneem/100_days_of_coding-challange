"use strict";
// Question 92: Write a function to remove the last element from an array and return the removed element.y.
function removeLastShape(inputValue) {
    return inputValue.pop();
}
let inputValue = ["Triangle", "Circle", "Square", "Cone"];
console.log(removeLastShape(inputValue));
console.log(inputValue);
