// Question 99: Generate a date object representing your next birthday and log it to the console.

// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday (month:number , day: number) : Date{
    // Get the current date:
  const today = new Date();
    // Get the current year
  let year = today.getFullYear();
    // Create a Date object for the next birthday
 const birthday = new Date( year, month-1 , day);
 // Check if the next birthday is before today's date
 if  (birthday < today){
    // If the birthday for this year has passed, set it to next year
    birthday.setDate(year+1);
 }
 // Return the next birthday Date object
 return birthday; 
}
// Get the next birthday for April 21st
 const nextBirthday = (getNextBirthday(4, 21));
 // Log the next birthday in a human-readable format
 console.log("Next Birthday on:" , nextBirthday.toLocaleDateString());