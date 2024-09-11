function sayMyName(){
    console.log("A");
    console.log("D"); 
    console.log("A");  
    console.log("R");    
    console.log("S");   
    console.log("H");
}
sayMyName()

// 
function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
}
const result=addTwoNumbers(3,4)//arguments
console.log("Result:",result);

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username to execute");
        return;        
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Adarsh"))
