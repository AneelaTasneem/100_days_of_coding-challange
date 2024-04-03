"use strict";
//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits) {
    // Finds the index of "Banana"
    let fruits_names = fruits.indexOf("Banana");
    // Finds the index of "Banana"
    if (fruits_names !== -1)
        fruits[fruits_names] = "Mango";
}
// Example: Replacing "Banana" in the array
let fruits = ["Orange", "Apple", "Banana", "Melon"];
replaceBananaWithMango(fruits);
console.log(fruits);
