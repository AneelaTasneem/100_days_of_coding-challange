"use strict";
//Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
// The string to search for vowels
const str = "Hello World !";
// An array containing the vowels in lowercase
const vowels = ['a', 'e', 'i', 'o', 'u'];
// Loop through each character in the string
for (const char of str) {
    // Check if the lowercase version of the character is in the vowels array
    if (vowels.includes(char.toLowerCase())) {
        // If a vowel is found, log a message to the console
        console.log("Found the first vowel:", char);
        // Exit the loop since we found the first vowel
        break;
    }
}
