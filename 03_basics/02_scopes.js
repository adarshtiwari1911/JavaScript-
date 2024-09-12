//global scope
var c = 3000; // var ka upayog global scope mein hua hai
let a = 300; // let ka upayog global scope mein hua hai
if (true) {
    //block scope
    let a = 10; // block scope mein let se nayi 'a' ki value tay ki gayi hai
    console.log("Inner:", a); // yeh inner 'a' ki value ko print karega, jo 10 hai
    const b = 20; // const ka upayog block scope mein hua hai, isliye 'b' sirf isi block mein valid hai
    var c = 30; // var ka upayog block scope mein bhi kiya jaa sakta hai, parantu yeh global scope mein redefine kar deta hai isliye yeh accha nahi hai
}

console.log(a); // yeh outer 'a' ki value ko print karega, jo 300 hai
// console.log(b); // yeh error dega kyunki 'b' block scope ke baahar upalabdh nahi hai
// console.log(c); // yeh global 'c' ki value print karega, jo block ke andar redefine hone ke baad 30 ho gayi hai

function one() {
    const username = "adarsh"; // 'username' ko function 'one' ke scope mein define kiya gaya hai

    function two() {
        const website = "youtube"; // 'website' ko function 'two' ke scope mein define kiya gaya hai
        console.log(username); // 'username' ko outer function se access kiya jaa raha hai
    }
    // console.log(website); // yeh error dega kyunki 'website' 'two' ke block ke bahar upalabdh nahi hai
    two(); // function 'two' ko call kiya jaa raha hai
}
one(); // function 'one' ko call kiya jaa raha hai

if (true) {
    const username = "adarsh"; // 'username' ko block scope mein define kiya gaya hai
    if (username === "hitesh") {
       const website = "google"; // 'website' ko inner block scope mein define kiya gaya hai
       console.log(username + website); // yeh 'username' aur 'website' ko concatenate karke print karega
    }
    // console.log(website); // yeh error dega kyunki 'website' inner block ke bahar upalabdh nahi hai
    console.log(username); // yeh 'username' ko print karega jo 'adarsh' hai
}

// console.log(username); // yeh error dega kyunki 'username' block scope ke bahar upalabdh nahi hai

//+++++++++++++

console.log(addone(5)); // yaha hoisting ho gaya, function definition pahle se memory mein allocate hoti hai
function addone(num) {
    return num + 1;
}

// yaha hoisting nahi hoga, kyunki const se define function ko hoisting nahi milti
console.log(addTwo(5)); // yeh error dega kyunki function expression ko pahle initialize nahi kiya gaya
const addTwo = function(num) {
    return num + 2;
};
