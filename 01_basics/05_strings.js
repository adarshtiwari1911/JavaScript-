const name = "adarsh";
const repoCount = 50;

// This method is not recommended for concatenating strings in modern times
console.log(name + repoCount + "value"); 

// Using template literals is a better way to concatenate strings
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("adarshhhdu");

// Accessing the first character of the string
console.log(gameName[0]); 

// Accessing the prototype of the string
console.log(gameName.__proto__); 

// Getting the length of the string
console.log(gameName.length); 

// Converting the string to uppercase
console.log(gameName.toUpperCase()); 

// Getting the character at a specific index
console.log(gameName.charAt(2)); 

// Finding the index of a specific character
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4);
console.log(newString);

// slice() method extracts a section of a string and returns a new string
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newString1 = " hitesh ";
console.log(newString1);
console.log(newString1.trim()); // removes whitespace from both ends

const url = "https://hitesh.com/hitesh%20choudhry";
console.log(url.replace('%20', '-')); // replaces %20 with -

console.log(url.includes('hitesh')); // checks if the string includes 'hitesh'
console.log(url.includes('sourav')); // checks if the string includes 'sourav'

console.log(gameName.split('-')); // splits the string into an array using '-' as the separator