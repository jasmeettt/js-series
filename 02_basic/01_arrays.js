const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);

// Array Methods

// myArr.push(6); // adds value to the end of the array
// myArr.pop(); // removes value from the end of the array
// myArr.unshift(1); // adds value to the start of the array
// myArr.shift(); // removes value from the start of the array

const newArray = myArr.join();
// console.log(myArr);
// console.log(newArray); // joins the array together and converts them into string

//slice, splice


// console.log('A ', myArr);

const myNewArray = myArr.slice(1, 3) // slice does not manipulate the Array
// console.log(myNewArray, "slice"); // output => [1, 2]
// console.log('B ', myArr); // output => [0, 1, 2, 3, 4, 5]

const myNewArray2 = myArr.splice(1, 3); // splice does manipulate the Array
// console.log(myNewArray2, "splice"); // output => [1, 2, 3]
// console.log('C ', myArr); // output => [0, 4, 5]

const marvel_heros = ["thor","hulk","ironman"];
const dc_heros = ["superman", "batman","flash"];

const allHeros = marvel_heros.concat(dc_heros); // can be used to connect two arrays together (note: not frequently used, spread operator is used more often(...))
// console.log(allHeros);

const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
const Array4 = [1,3,9,19];
const concatAll = Array1.concat(Array2, Array3,Array4)
console.log(concatAll)

 const heros = [...dc_heros,...marvel_heros]; // just spread the arrays (every element becomes idividual element)
//  console.log(heros);

 const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
 let realAnotherArray = anotherArray.flat(Infinity); // flat is sabko ek hi array mei dedu kya ? Yes✅ thus flat.
//  console.log(realAnotherArray);
 

console.log(Array.isArray(12)); // checks whether the array includes the data asked
console.log(Array.from("Jasmeet"));
console.log(Array.from({name: "Jasmeet",age: 12})) // firstly we need to clarify the function about which thing we need the array of, or it will return a empty set if it cannot make a array
// (can be asked in interviews)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); 
