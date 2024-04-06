//Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

// This function compares two strings, ignoring case sensitivity:
function comparingStringIgnoreCase(str1: any, str2: any) {
  // Convert both strings to lowercase and then compare them:
  return str1.toLowerCase() === str2.toLowerCase();
}
//Example:
console.log(comparingStringIgnoreCase("Hello", "hello"));
console.log(comparingStringIgnoreCase("Hello", "ANeela"));
