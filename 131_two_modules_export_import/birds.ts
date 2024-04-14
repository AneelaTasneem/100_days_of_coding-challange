// Define a class named Birds
class Birds {
    name: string;    // Define a property 'name' of type string to store the bird's name
    species: string; // Define a property 'species' of type string to store the bird's species

    // Constructor method to initialize the 'name' and 'species' properties
    constructor(name: string, species: string) {
        this.name = name;       // Assign the 'name' argument to the 'name' property
        this.species = species; // Assign the 'species' argument to the 'species' property
    }

    // Method to return a description of the bird
    getDescription() {
        return `${this.name} is a ${this.species}`; // Return a string with the bird's name and species
    }
}

// Export the Birds class to make it accessible in other files
export default Birds;
