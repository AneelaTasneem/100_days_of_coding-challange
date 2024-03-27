//Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

// This function uses compound assignment operators for different operations:
function useCoumpoundOperators() {
  let x = 4;
  console.log("Initial value of x :", x);

  x += 2; //Adds 2 in value of x:
  console.log("After addition:", x);

  x -= 3; // Subtracts 3 from value of x:
  console.log("After subtraction:", x);

  x *= 4; // multiplies by 4:
  console.log("After multiplication:", x);

  x /= 2; // Divides by 2:
  console.log("After division:", x);
}
useCoumpoundOperators();
