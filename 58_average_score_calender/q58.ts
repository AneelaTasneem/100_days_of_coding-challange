// Average score calculator:


// This programme calculates average of all scores given:

function average_score (...scores:number[]):number {
    let total =scores.reduce((sum,score) => sum+score,0);
    return total/scores.length;
    
}

// finding average of 4 scores:
console.log(average_score(45,89,55,79)) 