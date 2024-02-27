const marvel_heros = ["spiderman", "ironman", "thor"]

const dc_heros = ["batman", "superman", "flash"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// console.log(dc_heros);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [4, 6, [4, 5]], 8]

const real_another_array = another_array.flat(Infinity) // give depth as parameter
// console.log(real_another_array);

console.log(Array.isArray("pratik"));
console.log(Array.from("pratik")); // converts to array
console.log((Array.from({name : "pratik"}))); // intersting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
