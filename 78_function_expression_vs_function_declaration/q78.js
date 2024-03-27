"use strict";
//Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
//Function declaration:
function squareDeclaration(number) {
    return number * number;
}
//Function expression:
let squareExpression = function (number) {
    return number * number;
};
// Using both functions to square the number 4
console.log(squareDeclaration(4));
console.log(squareExpression(4));
