"use strict";
//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function sumOfNumbers(numbers) {
    return numbers.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
}
let numbers = [1, 4, 6, 7, 9, 0];
let result = (sumOfNumbers(numbers));
console.log(result);
