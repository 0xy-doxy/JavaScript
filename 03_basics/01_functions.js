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


function calculateCartaPrice(...num1){
    return num1
}

console.log(calculateCartaPrice(200,400,600,800,1000));

function calculateCartaPrice2(val1, val2, ...num1){
    return num1
}

console.log(calculateCartaPrice2(200,400,600,800,1000));

// passing object in function

const user = {

    username : "pratik",
    price : 199
}

function handleObject(anyobject){

     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price : 99
})

// passing array in function

const myArray = [100, 200, 300, 400, 500]

function returnSecondValue(anyarray){
    return anyarray[1]
}

console.log(returnSecondValue(myArray));