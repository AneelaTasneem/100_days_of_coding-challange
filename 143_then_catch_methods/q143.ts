//Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

function asyncTask(succeed:any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (succeed) {
                resolve("Task completed successfully!");
            } else {
                reject("Task failed!");
            }
        }, 2000);
    });
}

// Using the promise
asyncTask(true)
    .then(message => {
        console.log("Success:", message);
    })
    .catch(error => {
        console.error("Error:", error);
    });

asyncTask(false)
    .then(message => {
        console.log("Success:", message); // This will not be executed
    })
    .catch(error => {
        console.error("Error:", error); // Output: Error: Task failed!
    });
