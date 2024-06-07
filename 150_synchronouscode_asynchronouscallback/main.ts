//Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

//Synchronous Code Execution:
// Synchronous code execution means that tasks are performed one after another, in a sequence. Each task must complete before the next one begins. This can lead to blocking behavior, where long-running tasks prevent subsequent tasks from being executed.
// Define a function for task 1
function task1() {
  console.log("Task 1 is completed:");
}

// Define a function for task 2
function task2() {
  console.log("Task 2 is completed:");
}

// Call task1, which logs "Task 1 is completed:"
task1();

// Call task2, which logs "Task 2 is completed:"
task2();

// Log "End of synchronous Code" after both tasks are completed
console.log("End of synchronous Code");

//Asynchronous Callbacks
// Asynchronous callbacks allow tasks to be initiated and then put aside, enabling other tasks to run in the meantime. When the asynchronous task completes, the callback function is executed. This approach prevents blocking and allows JavaScript to handle other tasks while waiting for the asynchronous operation to finish.
console.log(
  "*******************************************************************"
);
console.log(
  "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
);
console.log(
  "*******************************************************************"
);

// Define a function for taskOne
function taskOne() {
  console.log("Task One is completed:");
}

// Define a function for taskTwo
function taskTwo() {
  console.log("Task two is completed:");
}

// Call taskOne, which logs "Task One is completed:"
taskOne();

// Schedule taskTwo to run after a delay of 1000 milliseconds (1 second)
setTimeout(taskTwo, 1000);

// This logs "End of asynchronous Callback" immediately after taskOne is called,
// even though taskTwo is scheduled to run after 1 second
console.log("End of asynchronous Callback");
