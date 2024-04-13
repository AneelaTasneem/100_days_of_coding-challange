//Question 127: Convert a traditional function expression to an arrow function.

let a = 10;
let b = 15;

// traditional function expression:
 const add = function (a:number , b:number) {
    return a + b
 };

 // Arrow function:
 let addNum = (a:number , b:number) => {
    return a + b;
 };

 console.log( add (a,b));
 console.log(addNum (a,b));
 
 