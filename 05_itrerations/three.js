// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(`each char = ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('JP', "Japan")
map.set('IN', "India")

// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key,value] of map) {
    // console.log(key, ':-', value);
}

// object.    are not iteratable in for of 

const myObject = {
    game1 : "NFS",
    game2 : "GTA"
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }

