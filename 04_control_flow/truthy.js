const userEmail = []

if (userEmail) {
    console.log("Got user email");
    // yeh block isliye chalega kyunki empty array bhi ek truthy value hota hai
} else {
    console.log("Don't have user email");
    // yeh block nahi chalega kyunki userEmail ek empty array hai, jo truthy hota hai
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// yeh sab falsy values hoti hain, matlab inhe if condition mein false mana jata hai

// truthy values
// "0", 'false', " ", [], {}, function(){}
// yeh sab truthy values hoti hain, matlab inhe if condition mein true mana jata hai

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
// agar email array ki length 0 ho, tab array empty mana jata hai

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    // agar object ke keys ki length 0 hai, to object ko empty mana jata hai
}

// Nullish Coalescing Operator (??): null undefined
// yeh operator null aur undefined values ke liye kaam karta hai

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// is condition mein, nullish coalescing operator pehli non-null/undefined value lega, jo 10 hai

console.log(val1); // output 10 hoga

// Ternary Operator
// condition ? true : false
// yeh ek shorthand tarika hai if-else condition likhne ka

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// agar iceTeaPrice 80 se kam ya barabar hoga to "less than 80" print hoga, warna "more than 80"
