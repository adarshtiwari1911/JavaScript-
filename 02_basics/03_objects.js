// Singleton koi bhi constructor se banate hai to singleton banta hai

// Object literals
// Object.create - singleton
const mySym = Symbol("key1")

const JsUser = { // key aur value define hota hai object me, key ko value treat karta hai aur value hum apne according de sakte hain
    name: "Adarsh",
    [mySym]: "myKey1",
    age: 18,
    location: "Noida",
    email: "adarshtiwari19112002@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Object access
console.log(JsUser.email) // Object ke email property ko access kar rahe hain
console.log(JsUser["email"]) // is tarike me hume "" include karna hota hai kyunki key ek string hai aur hume key ko string ke tarah pass karna hota hai
console.log(JsUser[mySym]) // Symbol ko access karne ka tarika

JsUser.email = "me.adarsh1911@gmail.com" // email property ki value update kar rahe hain

// Object.freeze(JsUser) // is line ko comment out kiya hai, isse object ko freeze karenge aur baad me properties update nahi kar paenge

JsUser.email = "me.adarsh1911@hotmail.com" // Ab ye update work karega kyunki freeze kiya hua nahi hai

console.log(JsUser) // Updated object ko console par print karenge

// Object ke andar ek nayi method greeting add kar rahe hain
JsUser.greeting = function() {
    console.log("Hello Js User") // greeting method ka output
}

// Object ke andar ek aur method greetingTwo add kar rahe hain, jo object ke naam ko use karta hai
JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`); // template literals ka use karke output generate kar rahe hain
}

console.log(JsUser.greeting()) // greeting method ko call kar rahe hain
console.log(JsUser.greetingTwo()) // greetingTwo method ko call kar rahe hain
