// Create a new JavaScript file named palindrome.js

// Declare two variables using the prompt() function
let firstWord = prompt("Enter the first word (e.g., RACECAR):");
let secondWord = prompt("Enter the second word (e.g., RECORDER):");

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Reverse the input strings
let reversedFirstWord = reverseString(firstWord);
let reversedSecondWord = reverseString(secondWord);

// Log the original and reversed strings to the console
console.log("Original first word:", firstWord);
console.log("Reversed first word:", reversedFirstWord);
console.log("Original second word:", secondWord);
console.log("Reversed second word:", reversedSecondWord);

// Check if the original strings are equivalent to their reversed versions
console.log("Is the first word a palindrome?", firstWord === reversedFirstWord);
console.log("Is the second word a palindrome?", secondWord === reversedSecondWord);
