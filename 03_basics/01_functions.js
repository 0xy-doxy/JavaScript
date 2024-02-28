function addTwoNumbers(number1, number2){

    console.log(number1+number2);
}

addTwoNumbers(5,6)
const result = addTwoNumbers(5,6);
console.log(result);         // imp


function addNumbers (number1, number2){

    return number1 + number2
}

const result2 = addNumbers(7,8)
console.log("result : ", result2);


function loginUserMessage(username){

    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in.`
}

//console.log(loginUserMessage("pratik"));
console.log(loginUserMessage());