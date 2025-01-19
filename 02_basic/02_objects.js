// singleton objects are made using constructor and are unique objects
// Object.create   // will talk about this in upcoming lec

//objects literals

const mySym = Symbol("myKey");

const jsUser = {
    name : "jasmeet",
    "surname" : "salhotra",
    age : 20,
    email : "jasmeet@google.com",
    location : "mumbai",
    [mySym] : "myKey", // this is how we add a symbol in an object 
    isLoggedIn : true,
    lastLoggedIn : ["mon","Tue","wed"]
};

// console.log(jsUser.age);
// console.log(jsUser["age"]);
// console.log(jsUser["surname"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
// console.log(jsUser);

// jsUser.email = "jssalhotra@gmail.com";
//Object.freeze(jsUser); // freeze is used to freeze a object, so no changes can be made to the object after using freeze.
// jsUser.email = "jssalhotra";

jsUser.greetings = function(){
    console.log("Hello JS User");
}
jsUser.greetings2 = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetings2());
// console.log(jsUser);

