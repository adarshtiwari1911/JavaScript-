// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)   
    // yeh loop 0 se 9 tak ke numbers print karega
}

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value ${i}`);
    // outer loop 0 se 9 tak chalega

    for (let j = 0; j < 10; j++) {
        console.log(`Inner  loop value ${j} and inner loop value ${i}`);
        // inner loop bhi 0 se 9 tak chalega aur har baar outer loop ki value ke saath print karega
    }   
}

// for loop for printing table

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(i + "*" + j + "=" + i*j);
        // yeh nested loop i aur j ki madad se table print karega, jaise 2*2=4
    }  
}

let myArray = ["flash", "superman", "batman"];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    // yeh loop array ke elements "flash", "superman", "batman" ko print karega
}

// break and continue

for (let index = 1; index < 20; index++) {
    if (index === 5) {
        console.log("5 detected and loop breaks");
        break;
        // jab index 5 ho jaata hai, loop break ho jata hai, aur aage nahi chalta
    }
    console.log(`value of i is ${index}`);
}

for (let index = 1; index < 20; index++) {
    if (index === 5) {
        console.log("5 detected and continue");
        continue;
        // jab index 5 ho jata hai, continue statement ke wajah se wo iteration skip ho jata hai
    }
    console.log(`value of i is ${index}`);
}
