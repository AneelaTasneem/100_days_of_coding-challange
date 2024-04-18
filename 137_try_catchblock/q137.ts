//Question 137: Implement a try-catch block to handle potential errors in a block of code.

// Define a function that might throw an error
function someFunctionThatMightThrowAnError() {
    // Simulate a function that might throw an error
    throw new Error("Something went wrong");
}

try {
    // Try to call the function that might throw an error
    let result = someFunctionThatMightThrowAnError();
    console.log(result);
} catch (error) {
    // If an error occurs, catch it and log an error message
    console.error("An error occurred:", error);
}
