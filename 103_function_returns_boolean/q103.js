"use strict";
// Question 103: Write a function that returns a random boolean value, true or false.
// This function will help to return boolean value:
function returnBooleanValue() {
    // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
    // const randomValue = Math.random()    
    // If the random number is greater than or equal to 0.5, return true
    // Otherwise, return false
    return Math.random() >= 0.5;
}
// Example usage
console.log(returnBooleanValue());
