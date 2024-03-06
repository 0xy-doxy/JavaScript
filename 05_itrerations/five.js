//  forEach

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//    // console.log(val);
// })


// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "jv"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
} )

