// Ek numbers ki array banayi gayi hai
const myNums = [1, 2, 3];

// reduce() ka use karke array ke sabhi numbers ka yog (sum) nikala gaya hai
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal); // Output: 6

// Ek shopping cart naam ka array banaya gaya hai jisme items ki list aur unki prices di gayi hain
const shoppingCart = [
    { itemName: "js course", price: 2999 },  // JavaScript course ki price 2999 hai
    { itemName: "py course", price: 999 },   // Python course ki price 999 hai
    { itemName: "mobile dev course", price: 5999 },  // Mobile development course ki price 5999 hai
    { itemName: "data science course", price: 12999 },  // Data science course ki price 12999 hai
];

// reduce() ka use karke sabhi items ki total price nikali gayi hai
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); // Output: 22996
