// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

// This function sees if both inputs are true
function checkBothTrue(value1: boolean, value2: boolean) {
  // Only says true if both val1 and val2 are true
  return value1 && value2;
}
// Trying it with true and false
console.log(checkBothTrue(true, false));
