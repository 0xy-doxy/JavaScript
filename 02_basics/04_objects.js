const tinderUser = new Object() // singlton object

//console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "heath"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {

    email : "xyz@gmail.com",
    fullName: {
         userFullName:{
            firstName: "pratik",
            lastName: "suryawanshi"
         }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    2: "a",
    4: "b"
}

const obj3 = {
    5: "a",
    6: "b"
}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

// objects in array
const user = [

    {
       id: 1,
       email: "1@gmail.com"
    },
    {
        id: 1,
        email: "1@gmail.com"
     },
     {
        id: 1,
        email: "1@gmail.com"
     },
]

//console.log(user[1].email);

///

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// de-struture of objects :

const course ={

    courseNmae: "javaScript",
    price:"999",
    CourseInstructor:"hitesh"
}

// console.log(course.CourseInstructor);

const {CourseInstructor} = course

console.log(CourseInstructor);

const {CourseInstructor : Instructor} = course

console.log(Instructor);
