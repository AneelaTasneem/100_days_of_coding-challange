// Refactoring to Arrow Functions:

//  Originl function to calculate the area of triangle:

function calculateArea(length: number, width: number): number {
  return length * width;
}

// Refactored into an arrow function:
const calculateAreaArrow = (length: number, width: number): number =>
  length * width;

//   Example using arrow function:
console.log(calculateAreaArrow(5, 7));
