const accountId=144553//it cannot be changed as it is declared as constant
let accountEmail="adarshtiwari19112002@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState //this will return undefined as we wanna create this but we have not given it the value

// accountId=2 it is not allowed  as accountId was declared as a constant
accountEmail="me.adarsh1911@gmail.com"//it will be modified
accountPassword="54321"//this will be modified
accountCity="Noida"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])//this will print the output in tabular form and more than one output can be printed
// prefer not to use var
// because of issue in block scope and functional scope