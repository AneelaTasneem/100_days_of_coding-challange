// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

// Define a function named checkingTextPresence that takes a string as input and returns a boolean.
function checkingTextPresence(inputValue: string): boolean {
  // Use the includes method to check if the input string contains the substring "Javascript".
  // includes returns true if the substring is found, and false otherwise.

  return inputValue.includes("Javascript");
}
// Call the checkingTextPresence function with the input string "I love coding in typescript".
// The function will return true if "Javascript" is found in the input string, false otherwise.

console.log(checkingTextPresence("I love coding in Typescript"));
