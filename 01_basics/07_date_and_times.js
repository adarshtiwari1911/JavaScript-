// Creating a new Date object representing the current date and time
let myDate = new Date()
console.log(myDate.toString())       // Outputs the current date and time as a string in a human-readable format
console.log(myDate.toDateString())   // Outputs the current date in a human-readable format without the time
console.log(myDate.toLocaleString()) // Outputs the current date and time in the local time format
console.log(typeof myDate)           // Outputs the type of myDate, which is "object" since Date objects are objects in JavaScript

// Creating a new Date object for January 23, 2024
let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toLocaleString()) // Outputs "1/23/2024, 12:00:00 AM" in the local time format

// Creating a new Date object using a date string format "MM-DD-YYYY"
let myCreatedDate1 = new Date("01-14-2024")
console.log(myCreatedDate1.toLocaleString()) // Outputs "1/14/2024, 12:00:00 AM" in the local time format

// Getting the current timestamp in milliseconds since January 1, 1970 (Unix Epoch)
let myTimeStamp = Date.now()
console.log(myTimeStamp) // Outputs the current timestamp in milliseconds
console.log(myCreatedDate.getTime()) // Outputs the timestamp for myCreatedDate in milliseconds
console.log(Math.floor(Date.now() / 1000)) // Outputs the current timestamp in seconds by dividing milliseconds by 1000

// Working with the current date and time
let newDate = new Date()
console.log(newDate)        // Outputs the current date and time
console.log(newDate.getDate()) // Outputs the current day of the month (1-31)
console.log(newDate.getDay())  // Outputs the current day of the week (0-6, where 0 represents Sunday)
console.log(newDate.getHours())// Outputs the current hour (0-23)

// Using template literals to format the day and time (This line is commented out and doesn't execute)
`${newDate.getDay()} and the time`

// Formatting the date to display the weekday as a long name (e.g., "Monday")
newDate.toLocaleString('default', {
    weekday: "long",
})
