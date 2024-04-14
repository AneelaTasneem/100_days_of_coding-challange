class Birds {
    name;
    species;
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    getDescription() {
        return `${this.name} is a ${this.species}`;
    }
}
export default Birds;
