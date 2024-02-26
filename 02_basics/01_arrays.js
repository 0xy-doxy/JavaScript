// array declaration

const myArr = [0, 1, 2, 3, 4, 5, "apples", "mangoes"]
// console.log(myArr[6]);

const myHeroes = ["ironman", "thor", "spiderman"]

const myArr2 = new Array (1, 2, 3, 4)

// array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.includes('apples'));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join() // converts to string
// console.log(myArr);
// console.log(newArr);

// slice and splice

// console.log("A", myArr);

// const myAn1 = myArr.slice(1,3)
// console.log(myAn1);
// console.log("B", myArr);

// const myAn2 = myArr.splice(1,3)
// console.log(myAn2);
// console.log("C", myArr );

const myAn3 = myArr.splice(3,2,8)
console.log(myAn3);
console.log("D", myArr);
