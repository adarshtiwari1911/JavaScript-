let index = 0
// while loop

// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
//     // yeh loop tab tak chalega jab tak index 10 se chhota ya barabar hai, aur har baar 2 ka increment hoga
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
    // yeh while loop array ke elements ko tab tak print karega jab tak arr ki value array ke length se chhoti hai
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
    // do-while loop pehle block ko ek baar execute karega, phir condition check karega
} while (score <= 10);
// yeh loop ek baar to chalega hi, chahe condition false ho, is case mein score 11 hai aur ek baar ke baad loop terminate ho jayega
