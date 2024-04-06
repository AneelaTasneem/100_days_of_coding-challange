//Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

// This function simulates rolling a six-sided dice and returns the result (a random integer between 1 and 6).
function diceRoll(): number {
  // Generate a random decimal number between 0 (inclusive) and 1 (exclusive), then multiply by 6 to get a number between 0 and 5.999...
  // Use Math.floor() to round down to the nearest whole number, which will give us a number between 0 and 5.
  // Finally, add 1 to shift the range to be between 1 and 6 (inclusive).
  return Math.floor(Math.random() * 6) + 1;
}
//Example usage : it will print numbers from 1 to 6:
console.log(diceRoll());
