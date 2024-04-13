// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

const obj = {
    name: "Object",
    outerFunction() {
        console.log(this.name); // This will log "Object"

        // Use an arrow function for the nested function
        const innerFunction = () => {
            console.log(this.name); // This will log "Object"
        };

        innerFunction();
    }
};

obj.outerFunction();

