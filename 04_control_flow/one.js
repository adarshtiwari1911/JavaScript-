// if condition ka use kar rahe hain
const isUserloggedIn = true;
const temperature = 41;

// agar temperature 40 ke barabar hai to yeh block chalega
if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 40"); // agar temperature 40 se zyada hai to yeh chalega
}

console.log("Execute");
// comparison operators: <, >, <=, >=, ==, !=, ===, !==

const score = 200;

// agar score 100 se zyada hai to user ki power "fly" set hogi
if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // yeh error dega kyunki 'power' ka scope sirf if block tak hai

const balance = 1000;

// agar balance 500 se zyada hai to yeh dono line print hongi
if (balance > 500) {
    console.log("test");
    console.log("test2");
}

// if-else ladder ka sahi tarike se istemal
if (balance < 500) {
    console.log("less than 500"); // agar balance 500 se kam hai
} else if (balance < 750) {
    console.log("less than 750"); // agar balance 750 se kam hai
} else if (balance < 900) {
    console.log("less than 900"); // agar balance 900 se kam hai
} else {
    console.log("less than 1200"); // agar upar ki sabhi conditions false hain
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// agar user logged in hai, debit card hai lekin 2==3 (false) hai to yeh block nahi chalega
if (userLoggedIn && debitCard && 2 === 3) {
    console.log("Allow to buy course");
}

// agar user Google ya Email kisi bhi ek se logged in hai to yeh chalega
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
