"use strict";
//Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
function getSeasons(month) {
    let season = "";
    switch (month) {
        // Winter months: December (12), January (1), February (2)
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        // Spring months: March (3), April (4), May (5)
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        // Summer months: June (6), July (7), August (8)
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        // Autumn months: September (9), October (10), November (11)
        case 9:
        case 10:
        case 11:
            season = "Autumn";
            break;
        // Default case for any other month number
        default:
            season = "Invalid Season";
            break;
    }
    return season;
}
// Test the function with different month numbers
console.log(getSeasons(3)); // Output: Spring
console.log(getSeasons(9)); // Output: Autumn
console.log(getSeasons(6)); // Output: Summer
