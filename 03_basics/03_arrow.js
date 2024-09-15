const user = {
    username: "Adarsh",
    price: 199,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);
        // console.log(this); 
        // yeh this keyword se user object ko refer karta hai
    }
};
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(user)
// console.log(this);

// function chai(){
//     console.log(this);
//     // yahaan par this global object ko point karta hai
// }
// chai()

// const chai = function () {
//     let username = "adarsh"
//     console.log(this.username)
//     // yahaan bhi this global object ko point kar raha hai, isliye undefined dega kyunki global object mein username nahi hai
// }
// chai()

const chai = () => {
    let username = "adarsh"
    //console.log(this.username)
    console.log(this);
    // arrow functions mein this lexical scope se liya jata hai, yaani global object ko refer karta hai
}
chai()

const addTwo = (num1, num2) => {
    return num1 + num2 //explicit return
}
//const addTwo=(num1,num2)=>num1,num2 - implicit return galat hai, isme proper syntax nahi hai
console.log(addTwo(4, 5)) // 9
