// Combining Arrays with spread Operator: suppose you are comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array stored in ascending order, then log the result.

// Two piles of toy laptop prices
let laptopprice1 = [2500, 6000, 5000];
let laptopprice2 = [1500, 4500, 9150];

// Spread out all the laptops into one big pile
let allPrices = [...laptopprice1, ...laptopprice2];

// Sort the prices from lowest to highest:
let sortedPrice = allPrices.sort((a, b) => a - b);

//  Show the sorted prices:
console.log(sortedPrice);
