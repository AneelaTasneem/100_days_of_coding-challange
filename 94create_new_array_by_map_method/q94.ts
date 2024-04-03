//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

//Array of words:
let words: string[] = ["School", "Papers", "Pencil", "Activity"];

//Array to store length of words:
let wordLengths: number[] = words.map((word) => word.length);

//output the length of words:
console.log(wordLengths);
