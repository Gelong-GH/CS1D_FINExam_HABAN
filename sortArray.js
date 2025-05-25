

// Step 1: Create two single-dimensional arrays
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Step 2: Merge both arrays into a single array
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Step 3: Sort numbers numerically in reverse order and log to the console
let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers (Descending):", sortedNumbers);

// Step 4: Sort names alphabetically and log to the console
let sortedNames = names.sort();
console.log("Sorted Names (Alphabetically):", sortedNames);
