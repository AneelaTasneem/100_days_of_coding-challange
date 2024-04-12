// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

function checkForCanada(map: Map<string, string>): void {
    if (map.has("Canada")) {
        const capital = map.get("Canada");
        console.log(`The capital of Canada is ${capital}`);
    } else {
        console.log("Canada is not found in the map");
    }
}

// Create a new Map to store country-capital pairs
const countryCapitalsMap = new Map<string, string>();

// Adding countries and their capitals to the Map
countryCapitalsMap.set("Pakistan", "Islamabad"); // Key: 'Pakistan', Value: 'Islamabad'
countryCapitalsMap.set("Canada", "Ottawa"); // Key: 'Canada', Value: 'Ottawa'
countryCapitalsMap.set("Japan", "Tokyo"); // Key: 'Japan', Value: 'Tokyo'

// Display the Map in the console
console.log(countryCapitalsMap);

