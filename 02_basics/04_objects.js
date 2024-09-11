// Naya object bana rahe hain
const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Adarsh";
tinderUser.isLoggedIn = false; // Corrected: added a dot before 'isLoggedIn'

console.log(tinderUser);

// Object literal syntax se object define kar rahe hain
const regularUser = {
    email: "some@gmail.com", // Line ke end par comma daalna zaroori hai
    fullname: {
        userfullname: {
            firstname: "Adarsh",
            lastname: "Tiwari"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname); // Semicolon lagana achi practice hoti hai

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// Do objects ko combine kar rahe hain
const obj3 = Object.assign({}, obj1, obj2); // Object.assign use karke
console.log(obj3);

const obj4 = {...obj1, ...obj2}; // Spread operator se combine kar rahe hain
console.log(obj4);

// Database se data array ke form mein aata hai
const users = [
    {
        id: 1,
        email: "a@gmail.com",
    },
    {
        id: 2,
        email: "b@gmail.com",
    },
    {
        id: 3,
        email: "c@gmail.com",
    }
];

users[1].email; // Dusre user ka email nikaal rahe hain
console.log(tinderUser);

// Object ke keys (properties) ki list deta hai
console.log(Object.keys(tinderUser));

// Object ke values ki list deta hai
console.log(Object.values(tinderUser));

// Array ke andar arrays return karega (key-value pairs)
console.log(Object.entries(tinderUser));

// Check karte hain ki 'isLoggedIn' property hai ya nahi
console.log(tinderUser.hasOwnProperty('isLoggedIn')); 
