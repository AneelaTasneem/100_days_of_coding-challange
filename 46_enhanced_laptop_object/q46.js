"use strict";
// Ehanced laptop object: construct an object for a laptop including properties make, model, year and a method describe () that logs a sentence about the lap top. 
// Constructing an object for laptop:
let laptop = {
    make: "Elitebook",
    model: " HP EliteBook 830",
    year: "2007",
    describe: function () {
        console.log(`This is ${this.year} ${this.model} ${this.model} laptop.`);
    }
};
// Describing a sentence about laptop:
laptop.describe();
