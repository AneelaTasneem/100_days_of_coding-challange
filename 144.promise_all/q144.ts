//Question 144: Explain the use of the Promise.all() method with an example.

// Create a Promise that resolves after 1 second
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
});

// Create a Promise that resolves after 2 seconds
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000);
});

// Create a Promise that resolves after 3 seconds
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 3000);
});

// Use Promise.all() to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
    // If all promises are resolved, log the results
    .then((results) => {
        console.log('All promises resolved:', results);
    })
    // If any promise is rejected, log the error
    .catch((error) => {
        console.error('One of the promises was rejected:', error);
    });
