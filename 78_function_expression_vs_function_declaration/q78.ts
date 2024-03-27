//Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

//Function declaration:

function squareDeclaration(number: number) {
  return number * number;
}

//Function expression:
let squareExpression = function (number: number) {
  return number * number;
};

// Using both functions to square the number 4
console.log(squareDeclaration(4));
console.log(squareExpression(4));
// Both methods give us the same result,
// showing two different ways to create functions that do the same thing.