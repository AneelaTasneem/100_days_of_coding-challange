"use strict";
//Question 149: Explain the concept of the event loop in JavaScript with an example.
// This message will be displayed immediately:
console.log("Start");
// Define the named function to execute after a delay:
function delayedMessage() {
    console.log("Inside setTimeout");
}
// Setting up the delay:
// The delayedMessage function will be called after 0 milliseconds (immediate, but queued)
setTimeout(delayedMessage, 0);
// This message will be displayed immediately:
console.log("End");
