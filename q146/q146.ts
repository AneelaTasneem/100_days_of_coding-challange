//Question 146: Show an example of a callback function used to filter an array of numbers.

// Define an array of numbers
const numbersArray: number[] = [1, 2, 4, 5, 7, 9, 12, 13];

// Use the .filter() method to find numbers less than 7
// The .filter() method creates a new array with all elements that pass the test implemented by the provided function
const numbersToFilter: number[] = numbersArray.filter((number) => number < 7);

// Log the filtered numbers to the console
console.log(numbersToFilter); // Outputs: [1, 2, 4, 5]

