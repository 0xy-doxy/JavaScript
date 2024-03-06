// const coding = ["js", "ruby", "java", "python","cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )
// console.log(values);   // so it does not return value like this

const myNums = [1, 2, 3, 4, 5, 6, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )  or

// const newNums = myNums.filter( (num) => {
//     return num > 4                          // use of return keyword is must in scope
// } )

// by for each method

const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )


console.log(newNums);
