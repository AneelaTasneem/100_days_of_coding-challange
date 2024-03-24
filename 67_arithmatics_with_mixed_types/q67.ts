// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.

// This function adds a number and a string that represents a numbe
function arithematicsWithMixedTypes(
  number1: number,
  numstring: string
){
  // Converts the string to a number and adds it to the first number
  return number1 + Number(numstring);
}
// String will be turned into number :
console.log(arithematicsWithMixedTypes(15, "5"));
