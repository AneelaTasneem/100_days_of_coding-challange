"use strict";
//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
let words = ["School", "Papers", "Pencil", "Activity"];
let wordLengths = words.map(word => word.length);
console.log(wordLengths);
