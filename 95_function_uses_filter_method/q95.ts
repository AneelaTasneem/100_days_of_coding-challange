//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

// Function that filters numbers greater than 10 from an array
function numberGreaterThanTen(numbers: number[]): number[] {
  // Using filter to keep only numbers greater than 10
  return numbers.filter(number => number > 10);
}
// Example usage
let numbers = [27, 10, 5, 45, 79, 7, 8];
let result = numberGreaterThanTen(numbers);
// Output the result

console.log(result);
