"use strict";
//Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
// Create a new Date object to get the current time
const currentTime = new Date();
// Get the current hour from the Date object
const currentHour = currentTime.getHours();
// Check if the current hour is less than 12 (noon)
if (currentHour < 12) {
    // If it is, log "Good Morning"
    console.log("Good Morning");
}
