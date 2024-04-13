"use strict";
// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function evaluateExpression(expression) {
    // Use a switch statement to evaluate the expression
    switch (expression) {
        // Case for addition
        case "addition":
            console.log("Performing addition");
            break;
        // Case for subtraction
        case "subtraction":
            console.log("Performing subtraction");
            break;
        // Case for multiplication
        case "multiplication":
            console.log("Performing multiplication");
            break;
        // Case for division
        case "division":
            console.log("Performing division");
            break;
        // Default case for expressions that don't match any of the above cases
        default:
            console.log("Invalid expression");
            break;
    }
}
// Test the function with different expressions
evaluateExpression("addition"); // Output: Performing addition
evaluateExpression("subtraction"); // Output: Performing subtraction
evaluateExpression("percentage"); // Output: Invalid expression
