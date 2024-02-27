// singleton
// object.create     both are used in constructor method


// object literals

const mySym = Symbol("key1")

const jsUser = {      // obj declaration

    name: "pratik",
    "full name ": "pratik suryawanshi",
    [mySym]: "myKey1",
    age: 20,
    email: "pratikABC@gmail.com",
    location: "sangli",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]

}

// console.log(jsUser.email)      
// console.log(jsUser["email"])   // remember this style also
// console.log(jsUser["full name "])
// console.log(jsUser[mySym]);

// jsUser.email = "pratik123@gmail.com"     // overwriting
// Object.freeze(jsUser)                // cannot change obj now  
// jsUser.email = "pratik789@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){

    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){

    console.log(`Hello JS user, ${this.name}.`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




