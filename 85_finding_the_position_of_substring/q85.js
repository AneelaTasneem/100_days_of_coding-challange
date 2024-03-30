"use strict";
// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
// Define a function named findCodePosition that takes a string as input and returns a number.
function findCodePosition(inputString1) {
    // Use the indexOf method to find the first occurrence of the substring "code" in the inputString1.
    // indexOf returns the index of the first occurrence of the substring or -1 if it is not found.
    return inputString1.indexOf("code");
}
// Call the findCodePosition function with the input string "Learn to code with javascript."
// The function will return the index of the first occurrence of "code" in the input string.
console.log(findCodePosition("Learn to code with javascript."));
