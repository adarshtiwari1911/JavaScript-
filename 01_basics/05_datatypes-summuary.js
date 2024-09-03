//#Primitive
//7 types:String,Number,Boolean,null,,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')


console.log(id===anotherId)

const bigNumber=3435454569999302938848959489494n



//non-primitive or reference
//Array,Objects,Functions

const heroes=["shaktiman","nagraj","doga"];
let myObj={
    name: "Adarsh",
    age: 20,
}

const myFunction=function(){
    console.log("Hello World")
}
console.log(typeof myFunction)
console.log(typeof bigNumber)
