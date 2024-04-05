"use strict";
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDate() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return ` ${day}-${day}-${year}`;
}
console.log(getCurrentDate());
