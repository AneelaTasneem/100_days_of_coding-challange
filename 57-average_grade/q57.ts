//Average grade:

//Numbers:
const grades: number[] = [80, 90, 75, 85, 95];

//Calculate average grades:
const sum: number = grades.reduce((total, grade) => total + grade, 0);
const average: number = sum / grades.length;

//Shows result of average grade:
console.log("Average grade:", average);
