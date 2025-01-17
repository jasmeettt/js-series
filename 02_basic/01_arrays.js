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


