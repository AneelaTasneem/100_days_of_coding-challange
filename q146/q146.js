"use strict";
//Question 146: Show an example of a callback function used to filter an array of numbers.
// array of numbers:
const numbersArray = [1, 2, 4, 5, 7, 9, 12, 13];
// use .filter to finf numbers less than 7:
const numbersToFilter = numbersArray.filter((number) => number < 7);
console.log(numbersToFilter);
