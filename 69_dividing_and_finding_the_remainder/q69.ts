// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both

// This function divides two numbers and finds the quotient and remainder
function divideWithRemainder(divident: number, divisor: number):{quotient: number, remainder:number} {
  // Calculates the quotient and remainder
  let quotient = Math.floor(divident / divisor);
  let remainder = divident % divisor;
  // Returns both in an object
  return { quotient, remainder };
}
// Trying it with number 11 divided with 3:
console.log(divideWithRemainder(11, 3));
