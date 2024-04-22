// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

// Define an async function called delayedHello
async function delayedHello() {
    // Wait for 2 seconds using a promise and setTimeout
    await new Promise(resolve => setTimeout(resolve, 2000));
    // After 2 seconds, return "Hello, World!"
    return "Hello, World!";
}

// Using the async function
// Call delayedHello, which returns a promise
delayedHello().then(message => {
    // When the promise is resolved, log the message to the console
    console.log(message); // Output: Hello, World!
});
