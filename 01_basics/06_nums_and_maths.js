const score = 400; // Declaring a constant variable 'score' with a value of 400

// Creates a Number object for the variable 'balance' with a value of 100
const balance = new Number(100); 
console.log(balance); // Logs the Number object 'balance' to the console

// Converts the 'balance' to a string and gets the length of the string
console.log(balance.toString().length); // Outputs: 3

// Formats the 'balance' to 2 decimal places
console.log(balance.toFixed(2)); // Outputs: "100.00"

// Declares a variable 'otherNumber' with a floating-point number
const otherNumber = 23.8966;
// Formats 'otherNumber' to 3 significant digits
console.log(otherNumber.toPrecision(3)); // Outputs: "23.9"

// Declares a variable 'hundreds' with a value of 100000
const hundreds = 100000;
// Converts 'hundreds' to a string formatted according to Indian English conventions
console.log(hundreds.toLocaleString('en-IN')); // Outputs: "1,00,000"

// +++++++++++++++++++++++++++++ Maths++++++++++++++++++

// Logs the Math object to the console (contains all math functions and constants)
console.log(Math);

// Returns the absolute value of -4
console.log(Math.abs(-4)); // Outputs: 4

// Rounds the number 4.6 to the nearest integer
console.log(Math.round(4.6)); // Outputs: 5

// Rounds 4.6 up to the nearest integer
console.log(Math.ceil(4.6)); // Outputs: 5

// Rounds 4.6 down to the nearest integer
console.log(Math.floor(4.6)); // Outputs: 4

// Returns the square root of 25.12
console.log(Math.sqrt(25.12)); // Outputs: 5.012475202508726

// Returns the smallest number among the provided numbers
console.log(Math.min(1, 2, 3, 4, 5, 6, 7)); // Outputs: 1

// Returns the largest number among the provided numbers
console.log(Math.max(1, 2, 3, 4, 5, 6, 7)); // Outputs: 7

// Generates a random decimal number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Generates a random decimal number between 1 (inclusive) and 11 (exclusive)
console.log((Math.random() * 10) + 1);

// Generates a random integer between 1 (inclusive) and 10 (inclusive)
console.log(Math.floor(Math.random() * 10 + 1));

// Generates a random integer between 1 (inclusive) and 11 (exclusive)
console.log(Math.ceil(Math.random() * 10 + 1));

// Defines minimum and maximum values for a random range
const min = 10;
const max = 20;

// Generates a random integer between 'min' (inclusive) and 'max' (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1) + min));
