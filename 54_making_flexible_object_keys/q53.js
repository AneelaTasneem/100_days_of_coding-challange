"use strict";
// A way to make a flexible list :
function createObjectWithDynamicKey(key, vlaue) {
    let dynamicObject = {}; // // Define the type for dynamicObject
    // setting up a section in the list with a changable name:
    dynamicObject[key] = vlaue;
    return dynamicObject;
}
// Using the flexible list setup for a user preferences:
let userpreferences = createObjectWithDynamicKey("theme", "dark");
//Showing the user's choice:
console.log(userpreferences);
