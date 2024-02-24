// primitive 
// types : Number , String , Boolean , Undefined , Null , Symvbol , BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id);
console.log(anotherId);



// Reference (non - primitive)
// types : array , objects , functions

const heros = ["ironman", "hulk" , "thor"]

let obj = {

    name : "pratik",
    age : 20,
}

const myFunction = function (){
    console.log("hello!");
}

// +++++++++++++++++++++++++++++++++++++++++++

// primitive => stack memory    Non-primitive => heap memory