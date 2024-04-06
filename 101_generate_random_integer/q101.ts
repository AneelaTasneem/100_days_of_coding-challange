//Question 101: Generate a random integer between 1 and 10.

// Generates a random integer between 1 and 10
function getRandomIntegers() : number{
    return Math.floor(Math.random()*10)+1;
}

console.log(getRandomIntegers());