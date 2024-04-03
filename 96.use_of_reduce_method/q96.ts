//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// This function calculates the sum of all numbers in an array:
function sumOfNumbers(numbers: number[]): number {
  return numbers.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue,
    0
  );
}

// Example: Calculating the sum of an array of numbers:
let numbers: number[] = [1, 4, 6, 7, 9, 0];
let result = sumOfNumbers(numbers);

console.log(result);
