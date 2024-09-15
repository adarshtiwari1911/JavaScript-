// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
    // yeh block tab chalega jab temperature 40 ke barabar ho
} else {
    console.log("temperature is greater than 50");
    // agar temperature 40 nahi hai, to yeh block execute hoga
}

console.log("Execute");
//<, >, <=, >=, ==, !=, ===, !== yeh sab comparison operators hain

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
    // score 100 se zyada hone par user ki power "fly" set hoti hai
}

//console.log(`User power: ${power}`); not accessible as power is defined in local scope and we are printing this in global scope
// yeh error dega kyunki power ka scope sirf if block ke andar hai

const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");
// ek hi line me multiple console.log likhne ka tarika, yeh dono line execute hongi

if (balance < 500) {
    console.log("less than 500");
    // yeh tab chalega jab balance 500 se kam hoga
} else if (balance < 750) {
    console.log("less than 750");
    // agar balance 500 se zyada hai par 750 se kam hai, yeh chalega
} else if (balance < 900) {
    console.log("less than 900");
    // agar balance 750 se zyada hai par 900 se kam hai, yeh chalega
} else {
    console.log("less than 1200");
    // baaki sab conditions fail hone par yeh execute hoga
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
    // yeh condition fail hogi kyunki 2==3 false hai, to yeh block nahi chalega
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    // kyunki loggedInFromEmail true hai, yeh block execute hoga
}
