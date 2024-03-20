"use strict";
//Average grade:
//Numbers:
const grades = [80, 90, 75, 85, 95];
//Calculate average grades:
const sum = grades.reduce((total, grade) => total + grade, 0);
const average = sum / grades.length;
//Shows result of average grade:
console.log("Average grade:", average);
