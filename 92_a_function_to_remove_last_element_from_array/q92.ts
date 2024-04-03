// Question 92: Write a function to remove the last element from an array and return the removed element.y.

// This function removes the last element from an array and returns it
function removeLastShape<T>(inputValue: T[]): T | undefined {
  // Removes and returns the last element of the array
  return inputValue.pop();
}

// Removes last shape's name from the end of array:
let inputValue = ["Triangle", "Circle", "Square", "Cone"];
console.log(removeLastShape(inputValue));
console.log(inputValue); // updated list of shapes without last name of shape:
