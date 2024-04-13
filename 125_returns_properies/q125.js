"use strict";
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
const my_object = {
    name: "my_object",
    description: "This is my object",
    getInfo() {
        return `${this.name} : ${this.description}`;
    }
};
console.log(my_object.getInfo());
