//Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

// Declare two variables
let a = 3;
let b = 4;

// Arrow function with two parameters
const add = (a: number, b: number) => {
    // Return the sum of the two parameters
    return a + b;
};

// Call the add function with the values of a and b, and log the result to the console
console.log(add(a, b)); // Outputs: 7
