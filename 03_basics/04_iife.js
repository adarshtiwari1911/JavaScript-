// Immediately Invoked Function Expressions (IIFE)

// IIFE ka matlab hai ek function jo turant define hone ke baad execute ho jata hai
//global scope ke variable se problem hoti hai kaafi baar to usko hatane ke liye hum iife ka use krte hai

(function chai() {
    // yeh ek named IIFE hai
    console.log(`DB CONNECTED`);
    // yeh function turant execute hoga bina kisi call ke
})();

((name) => {
    // yeh ek anonymous IIFE hai jo arrow function ka use kar raha hai
    console.log(`DB CONNECTED TWO ${name}`);
    // isme 'name' parameter ko pass kar rahe hain, jo execution ke samay me 'hitesh' hoga
})('adarsh');
