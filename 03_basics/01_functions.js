// Function banaya hai jo naam ko character by character print karega
function sayMyName() {
    console.log("A"); // Console par 'A' print hoga
    console.log("D"); // Console par 'D' print hoga
    console.log("A"); // Console par 'A' print hoga
    console.log("R"); // Console par 'R' print hoga
    console.log("S"); // Console par 'S' print hoga
    console.log("H"); // Console par 'H' print hoga
}
sayMyName(); // sayMyName() function ko call kiya, jo upar diye gaye characters ko console par print karega

// Do numbers ko add karne ke liye function banaya hai
function addTwoNumbers(number1, number2) {
    let result = number1 + number2; // Do numbers ka sum 'result' variable mein store ho raha hai
    return result; // Function se 'result' ko wapas return kiya ja raha hai
}

const result = addTwoNumbers(3, 4); // Function 'addTwoNumbers' ko call kiya gaya aur arguments pass kiye (3 aur 4)
console.log("Result:", result); // 'Result' label ke saath addition ka result print karenge

// Function jo user ko login message deta hai
function loginUserMessage(username) {
    if (username === undefined) { // Yeh check karta hai ki kya 'username' provide kiya gaya hai ya nahi
        console.log("Please enter a username to execute"); // Agar 'username' nahi diya, toh yeh message show karega
        return; // Function yahin return ho jayega agar 'username' undefined hai
    }
    return `${username} just logged in`; // Agar 'username' diya gaya hai, toh login message return karega
}

console.log(loginUserMessage("Adarsh")); // Function ko call karke username 'Adarsh' pass kiya aur result print karenge

// Function jo cart ki total price calculate karega, aur rest operator ka use karega
function calculateCartPrice(val1, val2, ...num1) { 
    // 'val1' aur 'val2' ke baad jo bhi values pass hongi unko 'num1' array mein collect kiya jayega
    return num1; // 'num1' array ko return karenge jismein val1 aur val2 ke baad ki sabhi values hongi
}
console.log(calculateCartPrice(200, 400, 50000, 500)); // Function ko call kiya aur kuch values pass ki

// Ek 'user' object banaya gaya hai
const user = {
    username: "Adarsh", // 'username' property ki value 'Adarsh' hai
    price: 199 // 'price' property ki value 199 hai
}

// Function jo kisi bhi object ko handle karega
function handleObject(anyobject) {
    // Object ke 'username' aur 'price' properties ko print karega
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);    
}
handleObject(user); // 'user' object ko pass karke function call kiya
handleObject({
    username: "Sam", // 'username' property ki value 'Sam' hai
    price: 20000 // 'price' property ki value 20000 hai
}); // Direct object pass kiya aur function ko call kiya

// Ek naya array banaya jismein kuch numeric values hain
const myNewArray = [200, 400, 100, 600]; // Yeh array chaar elements ka hai

// Function jo array ke second value ko return karega
function returnSecondValue(getArray) {
    return getArray[1]; // Array ke second element ko return karega (0-based indexing mein second element 1 position par hota hai)
}
console.log(returnSecondValue(myNewArray)); // Function call kiya aur 'myNewArray' pass kiya, second value print karega

console.log(returnSecondValue([2000, 400, 5000, 1000])); // Direct array pass kiya aur function call kiya, second value print karega
