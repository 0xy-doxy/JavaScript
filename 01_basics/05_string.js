const name = "pratik"
const age = 20

console.log(`My name is ${name} and I am ${age} years old`) // concatination of string

// another way of declaring string

const gameName = new String ('shadow-fight')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0,4) // cannot use -ve values
console.log(newString);

const anotherString = gameName.slice(-11,4) // can use -ve values
console.log(anotherString);

console.log(gameName.split('-'));

const newStringOne = "    pratik  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "something%20abc"
console.log(url.replace('%20','-'));

console.log(url.includes('abc'))



