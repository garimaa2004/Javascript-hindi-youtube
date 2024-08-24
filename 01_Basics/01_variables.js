const accountId =14453
let accountEmail ="garima@google.com"
var accountPassword = "12345" //scope problem
accountCity = "Jaipur"
let accountState; //undefined

// accountId =2 //not allowed


accountEmail ="hc@hc.com"
accountPassword ="212121"
accountCity = "Benglaru"

console.log(accountId); 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/
