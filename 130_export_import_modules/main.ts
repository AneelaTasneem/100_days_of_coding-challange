// main.js

// Importing the 'add' and 'subtract' functions from the './math.js' module.
// These functions were exported from the 'math.js' module using the 'export' keyword.
import { add, subtract } from './math.js';

// Calling the 'add' function with arguments 5 and 4, and logging the result to the console.
console.log(add(5, 4)); // Output: 9

// Calling the 'subtract' function with arguments 15 and 7, and logging the result to the console.
console.log(subtract(15, 7)); // Output: 8
