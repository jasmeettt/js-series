 const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const add10 = myNumbers.map((num)=>{
//     return num +10
// })
// console.log(add10)


// const b = [];   // same thing with for each.

// myNumbers.forEach((n)=>{    
//     return b.push(n + 10);
// })
// console.log(b);


const newNums = myNumbers  // chaining loop
                .map((n)=> n * 10) //first this get executed and then the values of this result goes to the loop below and it goes on
                .map((n)=> n + 1 )
                .filter((n)=>{return n >= 40})

console.log(newNums)