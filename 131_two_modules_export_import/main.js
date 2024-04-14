// Importing the Animal class from the 'animal.js' module
import Bird from './birds.js';
// Creating a new instance of the Animal class with name "Gogo" and species "parrot"
const myPet = new Bird("Gogo", "parrot");
// Calling the getDescription method of the myPet instance and logging the result to the console
console.log(myPet.getDescription()); // Output: Gogo is a parrot
