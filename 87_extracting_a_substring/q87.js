"use strict";
// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// Define a function named extractingSubstring that takes a string as input and returns a substring.
function extractingSubstring(inputValue) {
    // Use the substring method to extract a substring starting from index 0 (inclusive) to index 10 (exclusive).
    // This will extract the first 10 characters of the input string.
    return inputValue.substring(0, 10);
}
// Call the extractingSubstring function with the input string "I love to code with Typescript".
// The function will return the first 10 characters of the input string.
console.log(extractingSubstring("I love to code with Typescript"));
