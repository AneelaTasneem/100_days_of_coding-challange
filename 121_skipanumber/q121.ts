//Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    // Check if the current number is 5
    if (i === 5) {
        // If it is, skip the rest of the code in this iteration
        continue;
    }
    // Output the current number to the console
    console.log(i);
}
