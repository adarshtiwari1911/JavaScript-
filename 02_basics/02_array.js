const marvelHeroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// Pushes the entire 'dc_heroes' array as a single element into 'marvelHeroes'
marvelHeroes.push(dc_heroes)
console.log(marvelHeroes) // Output: ["thor", "ironman", "spiderman", ["superman", "flash", "batman"]]

// Accesses the second element (index 1) of the array within 'marvelHeroes' at index 3
console.log(marvelHeroes[3][1]) // Output: "flash"

// Concatenates 'marvelHeroes' with 'dc_heroes' to create a new array
const allHeroes = marvelHeroes.concat(dc_heroes)
console.log(allHeroes) // Output: ["thor", "ironman", "spiderman", ["superman", "flash", "batman"], "superman", "flash", "batman"]

// Creates a new array combining all elements from 'marvelHeroes' and 'dc_heroes' using spread syntax
const all_new_heroes = [...marvelHeroes, ...dc_heroes] // Useful for merging more than two arrays
console.log(all_new_heroes) // Output: ["thor", "ironman", "spiderman", ["superman", "flash", "batman"], "superman", "flash", "batman"]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// Flattens 'anotherArray' to a specified depth (Infinity means fully flatten)
const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array) // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checks if the given value is an array
console.log(Array.isArray("Adarsh")) // Output: false (because it's a string)
console.log(Array.from("Adarsh")) // Creates an array from a string, Output: ["A", "d", "a", "r", "s", "h"]
console.log(Array.from({ name: "Adarsh" })) // Output: [] (because it's not an iterable object)

let score1 = 100
let score2 = 200
let score3 = 300

// Creates an array from the given values
console.log(Array.of(score1, score2, score3)) // Output: [100, 200, 300]
