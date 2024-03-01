// this keyword

const user = {
    username : "pratik",
    price: 99,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website !`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai() {
//     let username = "pratik"
//     //console.log(this.username);    // cannot used like this in function
    
// }
// chai()

// const chai = function () {
//     let username = "pratik"
//     console.log(this.username);    // cannot used like this in function
// }
// chai()

// const chai = () => { 
//     let username = "pratik"
//     console.log(this.username);    // cannot used like this in function
// }
// chai()


// ++++++++++++++++++++ arrow function +++++++++++++++++++++

const addTwo = (num1 ,num2) => {        //explicite return       
    return num1 + num2
}

const addTwoNew = (num1, num2) => num1 + num2      // another way to declare arrow function (implicite return)

const addAnotherTwo = (num1, num2) => (num1 + num2)   // another way to declare arrow function (implicite return)

console.log(addTwo(5,3));
console.log(addTwoNew(5,3));
console.log(addAnotherTwo(5,3));

const retuenObj = (any) => ({username: "pratik"})
console.log(retuenObj());