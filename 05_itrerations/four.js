// for in

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}


const programming = ["js", "rb", "cpp", "java", "py"]

for (const value in programming) {
   //console.log(programming[value]);
}

const map = new Map()     // not iterable in for in
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('JP', "Japan")
map.set('IN', "India")

// for (const key in map) {
//    console.log(map[key]);
// }
