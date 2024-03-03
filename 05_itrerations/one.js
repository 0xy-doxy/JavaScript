// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is a way");
    }
    //console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

let myArray = ["saitama", "goku", "gojo", "tanjiro"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {

    //console.log(`value of index is ${index}`);
    if (index == 5) {
        //console.log(`detected 5`);
        break
    }
    
    
}
for (let index = 1; index <= 20; index++) {

    
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`value of index is ${index}`);
    
    
}