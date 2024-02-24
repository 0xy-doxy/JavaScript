const score = 400
console.log(score)

const balance = new Number(500) // another way of declaring number
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.897
console.log(otherNumber.toPrecision(3));

const anyNumeber = 1000000
console.log(anyNumeber.toLocaleString('en-IN'));

// +++++++++++++++++++++ maths ++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(2,5,7,9));


console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min );
