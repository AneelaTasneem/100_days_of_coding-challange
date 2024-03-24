//Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.


// This function multiplies two decimal numbers
function multiplyingDecimals(num1: number, num2: number) {
  // Multiplies the numbers and rounds the result to two decimal places
  return Math.round(num1 * num2 * 100) / 100;
}
// Trying it with 0.6 and 0.2 to round to make the result easier to read.
console.log(multiplyingDecimals(0.6, 0.2));
//Another attempt:
console.log(multiplyingDecimals(0.12,0.158));