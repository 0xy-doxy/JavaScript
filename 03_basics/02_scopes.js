if(true){

    let a = 100
    const b = 200
    var c = 300
}

// console.log(a);
// console.log(b);
console.log(c);  // thats why var should not be used



function one() {
    const username = "pratik"

    function two(){
        const task = "coding"
        console.log(username);
    }
   // console.log(task);

    two()
}
one()


// ++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++

console.log(addone(5)); // here it is allowed

function addone(num){
    return num + 1
}


console.log(addtwo(5) );       // here it is not allowed , you have to initialize function first

const addtwo = function(num){
    return num + 2
}

