//dates

let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate1 = new Date(2024, 1, 25)
//console.log(myCreatedDate1.toDateString());

let myCreatedDate2 = new Date(2024, 1, 25, 10, 50)
//console.log(myCreatedDate1.toLocaleString());

let myCreatedDate3 = new Date("2023-02-25")
// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate3.getTime());

let timeStamp = Date.now()
//console.log(timeStamp);

//console.log(Math.floor(Date.now()/1000)); // for converting in seconds

let newDate = new Date()
console.log(newDate.getMonth()); // starts from 0 i.e 0 - jan, 1 - feb ...
console.log(newDate.getDay());
console.log(newDate.getDate());


newDate.toLocaleString('default',{
    weekday: "long",
})
