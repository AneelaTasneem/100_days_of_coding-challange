//Use a switch statement to log the days of the week based on a number (1-7).
import chalk from "chalk";
function logDayOfWeek(dayNumber) {
    let day = ""; // Initialize a variable to store the day
    switch (dayNumber) { // Check the value of dayNumber
        case 1:
            day = "Sunday"; // If dayNumber is 1, set day to "Sunday"
            break; // Exit the switch statement
        case 2:
            day = "Monday"; // If dayNumber is 2, set day to "Monday"
            break; // Exit the switch statement
        case 3:
            day = "Tuesday"; // If dayNumber is 3, set day to "Tuesday"
            break; // Exit the switch statement
        case 4:
            day = "Wednesday"; // If dayNumber is 4, set day to "Wednesday"
            break; // Exit the switch statement
        case 5:
            day = "Thursday"; // If dayNumber is 5, set day to "Thursday"
            break; // Exit the switch statement
        case 6:
            day = "Friday"; // If dayNumber is 6, set day to "Friday"
            break; // Exit the switch statement
        case 7:
            day = "Saturday"; // If dayNumber is 7, set day to "Saturday"
            break; // Exit the switch statement
        default:
            console.log("Invalid Day Number, kindly enter valid day number from 1 to 7");
        // If dayNumber is not between 1 and 7, log an error message
    }
    console.log(chalk.bgGreenBright(` ${day}`)); // Log the day with a green background
}
// Call the function with different day numbers
logDayOfWeek(6); // Logs: Friday in green background
logDayOfWeek(4); // Logs: Wednesday in green background
logDayOfWeek(9); // Logs: Invalid Day Number, kindly enter valid day number from 1 to 7 in green background
