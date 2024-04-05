"use strict";
// Question 99: Generate a date object representing your next birthday and log it to the console.
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setDate(year + 1);
    }
    return birthday;
}
const nextBirthday = (getNextBirthday(4, 21));
console.log("Next Birthday on:", nextBirthday.toLocaleDateString());
