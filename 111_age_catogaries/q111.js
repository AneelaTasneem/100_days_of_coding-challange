"use strict";
//Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
let person_age = 29;
// Check if person's age is less than or equal to 13
if (person_age <= 13) {
    console.log("Child"); // If true, print "Child"
}
// Check if person's age is between 13 and 19 (inclusive)
else if (person_age >= 13 && person_age <= 19) {
    console.log("Teenage"); // If true, print "Teenage"
}
// Check if person's age is 20 or older
else if (person_age >= 20) {
    console.log("Adult"); // If true, print "Adult"
}
// If none of the above conditions are met
else {
    console.log("Undefined"); // Print "Undefined"
}
