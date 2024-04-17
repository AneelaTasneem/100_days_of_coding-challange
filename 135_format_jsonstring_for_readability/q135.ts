//Question 135: Explain how you can format a JSON string with proper indentation for readability.

// Define a JavaScript object representing a person
let person = {
    name : "Ali",   // Key-value pair for the person's name
    age: 25,        // Key-value pair for the person's age
    city: "Karachi" // Key-value pair for the person's city
}

// Convert the JavaScript object into a JSON string with 2-space indentation
let jsonString = JSON.stringify(person, null, 2);

// Print the formatted JSON string to the console
console.log(jsonString);
