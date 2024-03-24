"use strict";
//Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    let blockLetVisibility = "Inside block only";
    console.log(blockLetVisibility);
    const blockConstVisibility = "Inside Block only";
    console.log(blockConstVisibility);
}
