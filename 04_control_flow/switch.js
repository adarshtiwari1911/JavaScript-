// switch(key) ke andar hum multiple conditions check karte hain
// switch case ek tarah ka conditional statement hota hai jo values ke hisaab se alag alag blocks execute karta hai

const month = 3
switch (month) {
    case 1:
        console.log("January");
        // agar month 1 hai to "January" print karega
        break;
    case 2:
        console.log("February");
        // agar month 2 hai to "February" print karega
        break;
    case 3:
        console.log("March");
        // agar month 3 hai to "March" print karega
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid");
        // agar month ki value 1-12 ke beech mein nahi hai to yeh "Invalid" print karega
        break;
}
 