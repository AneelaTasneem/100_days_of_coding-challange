"use strict";
// This programe mskes a function that adds a specific number:
function createAdders(specialNumber) {
    return function (num) {
        return specialNumber + num;
    };
}
// Create a custom adder with special number 5
const addFive = createAdders(4);
// Use the custom adder to add 5 to a number
console.log(addFive(16));
// Use the custom adder to add 5 to another number
console.log(addFive(24));
