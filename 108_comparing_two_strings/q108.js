"use strict";
//Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function comparingStringIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(comparingStringIgnoreCase("Hello", "hello"));
console.log(comparingStringIgnoreCase("Hello", "ANeela"));
