// const tinderUser = new Object (); // Singleton object

const tinderUser = {};
tinderUser.id = 123;
tinderUser.name = "Sam";
tinderUser.email = "jas@gmail.com";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "jasm@gmail.com",
    name: {
        firstname: "jasmeet",
        lastname: "salhotra" 
    }
}
// console.log(regularUser.name?.firstname);

const obj1 ={a:1,b:2};
const obj2 ={c:3,d:4};
const obj3 ={e:5,f:6};

//const objAll = {obj1,obj2}; // we get both the objects in one variable

// const objAll = Object.assign({}, obj1, obj2, obj3); // we use this assign to assign the objects to an another object (using a curly bracket helps in assign the different object in a new object rather than the first object)
// console.log(objAll);

const objAll = {...obj1, ...obj2, ...obj3} // spread operator
// console.log(objAll);

const user = [
    {
        id: 1, 
        email: "ajsm"
    },
    {
        id: 2, 
        email: "ajsm"
    },
    {
        id: 3, 
        email: "ajsm"
    }
]

// console.log(user[1].email);
 
// console.log(tinderUser);
//console.log(Object.keys(tinderUser));// return only the keys
//console.log(Object.values(tinderUser)); // return only the values
//console.log(Object.entries(tinderUser)); // puts every key values into arrays

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName : "JS in hindi",
    price : "999", 
    courseTeacher : "hitesh"
}

// course.courseTeacher

const {courseTeacher: inst} = course; // we make a empty obj and  
console.log(inst);
