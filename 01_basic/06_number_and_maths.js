const balance = 413.67; // JS auto detects it as a number

const score = new Number(400); //  Using Number Function to explicitly define number in JS
// console.log(score);

// Note: Number has comparatively less prototype properties (methods) than String

// console.log(balance.toString());
// console.log(typeof(balance.toString()));
// console.log(balance.toFixed()); // Used to reduce or round of to specific decimal values

const someNumber = 23.91989;
// console.log(someNumber.toPrecision(4));  // Output - 23.92

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)) // Output - 124
 
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // By default it converts into US standards, for Indian standards we use 'en-IN'.
// (Note: Check other formats in MDN Docs)

// Other methods
// .MAX_VALUE
// .MIN_VALUE
// .MAX_SAFE_INTEGER
// .MIN_SAFE_INTEGER

//console.log(Math.abs(-4)); // Converts +ve / -ve integer values to positive

// console.log(Math.round(1.8));
// console.log(Math.ceil(7.8));  Output - 8 (gives top value)
// console.log(Math.floor(7.8));  Output - 7 (gives bottom value)

 // console.log(Math.min(4,3,6,8)) // Output - 3
 // console.log(Math.max(4,3,6,8)) // Output - 8

 console.log(Math.random());
 console.log(Math.random()*10 + 1); // This assures that values are atleast 1 & more than 
 console.log(Math.floor((Math.random()*10)+1));// To avoid any BODMAS rule miscalculation
 1
 const min = 100;
 const max = 200;
 
 console.log(Math.floor(Math.random() * (max - min + 1)) + min) 