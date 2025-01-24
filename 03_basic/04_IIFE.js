// Immediately Invoked Function Expression (IIFE)


(function chai () {
    //named IIFE
    console.log(`DB CONNECTED`);
})(); 
// ()() syntax
// interview question
// IIFE is basically used to execute a function immediately AND helps in handling global pollution, semicolon is important

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )("jasmeet");
