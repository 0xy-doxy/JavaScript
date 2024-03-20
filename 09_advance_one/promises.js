// creating a promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, network calls, cryptography
    setTimeout(function () {
        console.log("Async task is completed !");
        resolve()
    }, 1000) 
})

// consuming a promise

promiseOne.then(function () {
    console.log("promise consumed !");
})

// both in one

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function () {
        console.log("Async 2 task is completed !");
        resolve()
    }, 1000) 
}).then(function () {
    console.log("Async 2 resolved!");
})