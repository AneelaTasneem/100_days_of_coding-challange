//Question 145: Create a function that accepts a callback and invokes it with some arguments.

// Define a function named executeCallback
// This function takes three arguments:
// 1. A callback function that accepts two numbers and returns void (nothing).
// 2. A number (arg1).
// 3. Another number (arg2).
function executeCallback(
    callback: (arg1: number, arg2: number) => void, // Callback function argument
    arg1: number, // First number argument
    arg2: number  // Second number argument
  ): void {
    // Invoke the callback function with arg1 and arg2 as arguments
    callback(arg1, arg2);
  }
  
  // Define a callback function named add
  // This function takes two numbers (a and b) and prints their sum
  const add = (a: number, b: number) => {
    console.log(a + b); // Output the sum of a and b
  };
  
  // Call executeCallback with the add function and the numbers 4 and 7
  // This will result in add(4, 7) being called, which outputs: 11
  executeCallback(add, 4, 7);
  