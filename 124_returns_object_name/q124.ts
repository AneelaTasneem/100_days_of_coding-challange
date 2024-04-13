//Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

// Create an object called my_object
const my_object = {
    // Add a property named name with the value "my_object"
    name: "my_object",

    // Add a method called getName that returns the value of the name property
    getName() {
        // Use the this keyword to refer to the current object (my_object)
        return this.name;
    }
};

// Call the getName method of my_object to get its name and log it to the console
console.log(my_object.getName()); // Outputs: my_object
