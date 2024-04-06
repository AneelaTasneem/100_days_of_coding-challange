"use strict";
//Question 104: Create a function that generates a random hexadecimal color cod:
// // This function generates a random hexadecimal color code
// function getRandomHexColor(): string {
//     const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
//     return color; // Returns the random color code
// }
// console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// // We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
function getRandomHexColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // Convert the decimal values to hexadecimal and format them as a color code
    const colorCode = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
    return colorCode;
}
// Example usage
console.log(getRandomHexColor()); // Output: a random hexadecimal color code
