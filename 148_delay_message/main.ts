// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.

// This message will be displayed immediately:
console.log("This message will be displayed immediately");

// Function to execute after a delay:
function delayedMessage() {
    // This message will be displayed after a 4-second delay:
    console.log("This message will display after 4 seconds delay");
}

// Setting up the delay:
// The delayedMessage function will be called after 4000 milliseconds (4 seconds)
setTimeout(delayedMessage, 4000);
