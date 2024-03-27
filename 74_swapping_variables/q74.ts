//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// This function swaps the values of two variables
function swapValues() {
    // Initially, a is 5 and b is 10
  let a = 5;
  let b = 10;
  console.log("Before swap: a =", a, "b =", b);
// Temporarily stores the value of a
  let temp = a;
   // Sets a to b's value
  a = b;
  // Sets b to a's original value stored in temp
  b = temp;
  // Logs the swapped values
  console.log("After Swapping : a = ", a, "b = ", b);
}
// We use a temporary variable to hold one value while we swap them, like a magic trick!
swapValues();
