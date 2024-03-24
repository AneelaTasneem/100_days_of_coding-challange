"use strict";
// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both 
function divideWithRemainder(divident, divisor) {
    let quotient = Math.floor(divident / divisor);
    let remainder = divident % divisor;
    return { quotient, remainder };
}
console.log(divideWithRemainder(11, 3));
