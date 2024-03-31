// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

// This function changes a string into a number
function convertingStringsToNumber(InputValue: string) {
  // Converts the cecimal numbers string to a number
  return parseFloat(InputValue);
  // Converts the whole numbers string to a number
  //  return parseInt(InputValue)
}
// Turning a numeric string into a real number
console.log(convertingStringsToNumber("43.124"));

// console.log(convertingStringsToNumber("43"));
