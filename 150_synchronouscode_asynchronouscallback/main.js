"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Synchronous Code Execution:
// Synchronous code execution means that tasks are performed one after another, in a sequence. Each task must complete before the next one begins. This can lead to blocking behavior, where long-running tasks prevent subsequent tasks from being executed.
//  console.log(chalk.yellow.underline("Synchronous Code Execution"));
function task1() {
    console.log("Task 1 is completed:");
}
function task2() {
    console.log("Task 2 is completed:");
}
task1();
task2();
console.log(" End of synchronous Code");
//------------------------------------------------------------------------------
//Asynchronous Callbacks
// Asynchronous callbacks allow tasks to be initiated and then put aside, enabling other tasks to run in the meantime. When the asynchronous task completes, the callback function is executed. This approach prevents blocking and allows JavaScript to handle other tasks while waiting for the asynchronous operation to finish.
console.log("*******************************************************************");
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
console.log("*******************************************************************");
// console.log(chalk.yellow.underline("Asynchronous Callbacks"));
function taskOne() {
    console.log("Task One is completed:");
}
function tasktwo() {
    console.log("Task two is completed:");
}
taskOne();
setTimeout(tasktwo, 1000);
console.log("End of asynchronous Callback");
