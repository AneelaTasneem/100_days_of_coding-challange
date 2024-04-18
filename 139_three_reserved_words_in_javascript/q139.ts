//Question 139: List three reserved words in JavaScript and create a valid use case for each.

// let:
function calculateArea(radius: number) {
    let pi = 3.14159;
    let area = pi * radius * radius;
    return area;
}

console.log(calculateArea(5)); // Output: 78.53975

//Function:
function greet(name:string) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!

//Class:
class Animal {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(this.name + " is " + this.age + " years old.");
    }
}

let dog = new Animal("GoGo", 3);
dog.displayInfo(); // Output: Buddy is 


