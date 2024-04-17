//Question 133: Write a JavaScript object and convert it into a JSON string.

//Created a javascript object:
 
// Define a JavaScript object representing a person
let person = {
    name: "Ali",   // Key-value pair for the person's name
    age: 25,       // Key-value pair for the person's age
    city : "Karachi"  // Key-value pair for the person's city
}

// Convert the JavaScript object into a JSON string
let jsonString = JSON.stringify(person);

// Print the JSON string to the console
console.log(jsonString);
