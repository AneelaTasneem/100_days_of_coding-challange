// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

// Define a car object
let car = {
  make: "Honda",
  model: "Civic",
  year: "2020", // Initial year
  color: "", // Define color property with an initial value
};
// Add a color property to the car
car.color = "Black";
// Update the year of the car
car.year = "2021";
// Print the car object
console.log(car);
