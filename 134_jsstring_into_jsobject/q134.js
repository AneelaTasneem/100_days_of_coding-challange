"use strict";
//Question 134: Take a JSON string and parse it into a JavaScript object.
// JSON string representing a person
let jsonString = '{"name":"Ali","age":25,"city":"Karachi"}';
//Phrase string into jvascript object:
let person = JSON.parse(jsonString);
//Accessing properties of the javascript object:
console.log(person.name);
console.log(person.age);
console.log(person.city);
