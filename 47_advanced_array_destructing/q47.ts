// // Advanced Array Destructing: Given an array of objects representing different laptops,each with properties make, model, and year. use array destructing to assign the first and second laptops to variable. Then, log theses variables.

// Making an array of laptop:
let laptops = [
  { make: "HP", model: "HP Envy", year: "2009" },
  { make: "Dell", model: "Dell XPS ", year: "2000" },
  { make: "Apple", model: "Apple MacBook Air", year: "2008" },
];

//  using array destructing to assign the first and second laptops to variable:
let [laptop1, laptop2] = laptops;

//  log  variables to destruct array:
console.log(laptop1);
console.log(laptop2);
