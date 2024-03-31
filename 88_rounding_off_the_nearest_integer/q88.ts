// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

// This function rounds a decimal number to the nearest whole number
function roundingOffIntegers (inputValue:number) {
 // Rounds the number    
    return  Math.round(inputValue);
}

console.log(roundingOffIntegers(4.23));
console.log(roundingOffIntegers(5.89));
// This shows how the function rounds numbers either up or down.