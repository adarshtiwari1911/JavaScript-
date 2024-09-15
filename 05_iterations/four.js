const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

// for...in loop: object ke properties ko iterate karne ke liye

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    // yeh loop object ke har property ke key aur value ko print karega
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

// Map ke keys ko print karne ke liye for...in loop ka use nahi hota

for (const key in map) {
    console.log(key);
    // yeh loop map ke keys ko print nahi karega kyunki Map ke upar for...in loop ka use nahi hota
}

// Map ke keys aur values ko iterate karne ke liye for...of loop ya Map methods ka use karna chahiye

for (const [key, value] of map) {
    console.log(`${key} stands for ${value}`);
    // yeh loop map ke har entry ko print karega: key aur value
}
