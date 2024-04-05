//Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year:

// get current date:
const currentDate = new Date();

// getnew year's date:
const nextnewyear = new Date(currentDate.getFullYear() + 1, 0 , 1);

// Calculate sdifference of days:
const oneDay = 24 * 60 * 60 * 1000; // hour * minutes * Seconds * Milliseconds:
const leftDays = Math.round((nextnewyear.getTime() - currentDate.getTime()) / oneDay)

// log the result:
console.log(`There are ${leftDays} days left in new year`)