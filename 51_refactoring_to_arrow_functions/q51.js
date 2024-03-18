"use strict";
// Refactoring to Arrow Functions:
//  Originl function to calculate the area of triangle:
function calculateArea(length, width) {
    return length * width;
}
// Refactored into an arrow function:
const calculateAreaArrow = (length, width) => length * width;
//   Example using arrow function:
console.log(calculateAreaArrow(5, 7));
