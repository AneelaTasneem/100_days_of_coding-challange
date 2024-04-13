"use strict";
//Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
// traditional function:
// Define an object named obj1
const obj1 = {
    // Add a property named name with the value "Object"
    name: "Object",
    // Add a method named sayName to the object
    sayName: function () {
        // Log the value of this.name to the console
        console.log(this.name);
    },
};
// Call the sayName method of the obj1 object
obj1.sayName(); // Outputs: Object
//Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
// Arrow function:
// Define another object named obj
const obj = {
    // Add a property named name with the value "Object"
    name: "Object",
    // Add a method named sayName to the object
    sayName: function () {
        // Define an arrow function named innerFunc inside the sayName method
        const innerFunc = () => {
            // Log the value of this.name to the console
            console.log(this.name);
        };
        // Call the innerFunc arrow function
        innerFunc();
    },
};
// Call the sayName method of the obj object
obj.sayName(); // Outputs: Object
