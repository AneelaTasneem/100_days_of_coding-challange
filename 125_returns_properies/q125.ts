// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

// Create an object called my_object
const my_object = {
    // Add a property named name with the value "my_object"
    name: "my_object",

    // Add a property named description with the value "This is my object"
    description: "This is my object",

    // Add a method called getInfo that returns a string combining the name and description properties
    getInfo() {
        // Use the this keyword to refer to the current object (my_object)
        return `${this.name} : ${this.description}`;
    }
};

// Call the getInfo method of my_object to get its name and description and log it to the console
console.log(my_object.getInfo()); // Outputs: my_object : This is my object

