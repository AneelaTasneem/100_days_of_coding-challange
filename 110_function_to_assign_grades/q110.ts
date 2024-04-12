//Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

// Function that assigns a grade based on a student's score
function students_grades(score: number) {
    if (score >= 90) {
        return "A";   // If score is 90 or above, return "A"
    } else if (score >= 80) {
        return "B";   // If score is between 80 and 89, return "B"
    } else if (score >= 70) {
        return "C";   // If score is between 70 and 79, return "C"
    } else if (score >= 60) {
        return "D";   // If score is between 60 and 69, return "D"
    } else if (score >= 50) {
        return "F";   // If score is between 50 and 59, return "F"
    }
    // Note: If score is below 50, this function doesn't return anything
    // This means the function will return undefined for scores below 50
}

const score = 95;
console.log(`"Score: " ${score} , "Grade: " ${students_grades(score)}`);
// Logs the score and the corresponding grade using the students_grades function

