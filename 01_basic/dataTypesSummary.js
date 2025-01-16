//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Jasmeet",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//  -------------------------------- Stack and Heap Memory -------------------------------------------

// Stack (primitive) 
let name1 = "jasmeet";
let name2 = name1;
name2 = "JASMEET";

console.log(name1);
console.log(name2);

// Heap (non-primitive)
let myName = {
    myName: "Jasmeet",
    email: "jasmeetsal@gmail.com",
    age: 20
}

let myName2 = myName;
myName2.email = "jasmeet@google.com"

console.log(myName.email);
console.log(myName2.email);
