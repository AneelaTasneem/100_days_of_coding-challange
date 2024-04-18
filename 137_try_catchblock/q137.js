//Question 137: Implement a try-catch block to handle potential errors in a block of code.
function someFunctionThatMightThrowAnError() {
    // Simulate a function that might throw an error
    throw new Error("Something went wrong");
}
try {
    let result = someFunctionThatMightThrowAnError();
    console.log(result);
}
catch (error) {
    console.error("An error occurred:", error);
}
export {};
