"use strict";
// Create a new Map to store student IDs and names
const studentMap = new Map();
// Adding student IDs and names to the Map
studentMap.set(101, "Aneela"); // Key: 101, Value: "Aneela"
studentMap.set(102, "Rehana"); // Key: 102, Value: "Rehana"
studentMap.set(103, "Farhat"); // Key: 103, Value: "Farhat"
// Iterate over the Map and log each pair to the console
studentMap.forEach((name, id) => {
    console.log(`Student's name: ${name}, Student's id ${id}`);
});
