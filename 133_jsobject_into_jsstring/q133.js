"use strict";
//Question 133: Write a JavaScript object and convert it into a JSON string.
//Created a javascript object:
let person = {
    name: "Ali",
    age: 25,
    city: "Karachi"
};
let jsString = JSON.stringify(person);
console.log(jsString);
