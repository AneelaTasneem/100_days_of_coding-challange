//Question 106: Determine if a given year is a leap year using comparison operators.

// This function checks if a given year is a leap year
function isLeapYear(year: number): boolean {
  // Check if the year is divisible by 4 and not divisible by 100, or if it is divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
// Test the function with example years
console.log(isLeapYear(2024));
console.log(isLeapYear(2021));
