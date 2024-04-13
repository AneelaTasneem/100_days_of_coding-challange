//Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

// Initialize a variable count to 10
let count = 10;

// Start a while loop that continues as long as count is greater than 0
while (count > 0) {
    // Output the current value of count to the console
    console.log(count);

    // Check if the current value of count is 5
    if (count === 5) {
        // If count is 5, break out of the loop
        break;
    }

    // Decrement the value of count by 1
    count--;
}
