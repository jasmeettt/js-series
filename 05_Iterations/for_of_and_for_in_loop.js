//for of loop

// ["", "", ""]
// [{}, {}, {}]


// const myArr = [1, 2, 3, 4, 5];
let myArr = ["Batman", "Superman", "Flash"]

for (const val of myArr) {
    // console.log(val);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(greet);  
}

// const greetings = "Hello World!";
// for (const greet of greetings) {
//     if (greet == " ") {
//         continue;
//     }
//     console.log(greet);  
// }


// Maps
// maps are unique key-value pairs in which same data won't be executed twice

const map = new Map();
map.set("IN" , "India");
map.set("RUS" , "Russia");
map.set("GER" , "Germany");
// console.log(map)


for (const key of map) {
    // console.log(key);
}
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObj = {
    game1 : "NFS",
    game2 : "ELDEN RING"

}

for (const game of myObj) {
    console.log(game); // we cannot use (for of) loop in obj because it shows it is initerable, we use different loops to iterate objects
}