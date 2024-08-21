function addNumbers(number1, number2) {
    let result = [
        number1 + number2,
        number1 - number2,
        number1 * number2,
        number1 % number2,

    ]
    return result
};

const result = addNumbers(3, 5)
// console.log(result);

function loginMessage(username) {
    if(!username){
        console.log(`pls enter username`);       
        return 
    }

    return(`${username} just logged in`);
       
    
    
}
// console.log(loginMessage("Sufiyan"));

const newArray = [100,200,500,600]

function secondvalue(newArray) {
     return newArray[1]
    
}
console.log(secondvalue(newArray));

