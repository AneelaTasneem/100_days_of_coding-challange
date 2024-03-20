// To keep only strings:

// mixed array:
let mixedArray: (string | number | boolean)[] = ["apple", 42, true, "banana", false, "cherry"];

// picking out only strings: 
let stringsOnly = mixedArray.filter((item) => typeof item === "string");


//Printing the list of strings:
console.log(stringsOnly);
