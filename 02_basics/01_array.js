// Initializing arrays
const myArr = [0, 1, 2, 3, 4, 5]; // An array of numbers
const myHeroes = ["shaktiman", "naagraj"]; // An array of strings
const myArr2 = new Array(1, 2, 3, 4); // Another way to create an array using the Array constructor

console.log(myArr[1]); // Accessing the second element of 'myArr' and printing it

// Array methods

myArr.push(6); // Adds 6 at the end of 'myArr'
myArr.push(7); // Adds 7 at the end of 'myArr'
console.log(myArr); // Prints the updated array
myArr.pop(); // Removes the last element (7) from 'myArr'
console.log(myArr); // Prints the updated array after popping

myArr.unshift(9); // Adds 9 at the beginning of 'myArr'
console.log(myArr); // Prints the updated array
myArr.shift(); // Removes the first element (9) from 'myArr'
console.log(myArr); // Prints the updated array after shifting

console.log(myArr.includes(9)); // Checks if 9 is in 'myArr' and prints the result (true/false)
console.log(myArr.indexOf(9)); // Returns the index of 9 in 'myArr' (-1 if not found)
console.log(myArr.indexOf(3)); // Returns the index of 3 in 'myArr'

const newArr = myArr.join(); // Joins all elements of 'myArr' into a string separated by commas
console.log(newArr); // Prints the joined string
console.log(typeof newArr); // Prints the type of 'newArr' (string)

// slice, splice

console.log("A", myArr); // Prints the current state of 'myArr'

// Using slice to create a new array from index 1 to 3 (not including 3)
const myn1 = myArr.slice(1, 3);
console.log(myn1); // Prints the sliced portion of the array

console.log("B", myArr); // 'myArr' remains unchanged after slice

// Using splice to remove 3 elements starting from index 1
const myn2 = myArr.splice(1, 3);
console.log("C", myArr); // Prints 'myArr' after the splicing operation
console.log(myn2); // Prints the removed elements
