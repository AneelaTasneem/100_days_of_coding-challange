// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

// This function formats the current date as DD-MM-YYYY
function getCurrentDate(): string {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0"); // Ensures the day is two digits
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adds 1 because months are 0-indexed
  const year = date.getFullYear().toString();

  return ` ${day}-${day}-${year}`;
}

console.log(getCurrentDate());
// Shows today's date, neatly formatted.
