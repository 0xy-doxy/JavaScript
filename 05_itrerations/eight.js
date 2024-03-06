// reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) { 
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// },0)

// in arrow function

const myTotal = myNums.reduce( (acc, curr) => acc + curr , 0)

// console.log(myTotal);

const shoppingcart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data scientist course",
        price : 12999
    },
   
]

const allTotal = shoppingcart.reduce( (acc, curr) => acc + curr.price, 0)
console.log(allTotal);