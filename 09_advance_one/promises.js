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

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username :"chai", email : "chai@ex.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username : "pratik", pass : "456"})
        } else {
            reject("ERROE : Something went wrong !")
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected.");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username : "Javascript", pass : "456"})
        } else {
            reject("ERROE : JS went wrong !")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()