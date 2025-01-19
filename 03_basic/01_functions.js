function sayMyName (){
    console.log("J");
    console.log("a");
    console.log("s");
    console.log("m");
    console.log("e");
    console.log("e");
    console.log("t");
}

// sayMyName(); 
// without the brackets its just the reference of the function so it wont show up on the log

// function addTwoNumbers (num1,num2){ // this bracketsare called parameters
//     console.log((num1)+(num2));
    
// } 

// addTwoNumbers(2,5) // this one are called arguments


function addTwoNumbers (num1,num2){ 
    let result = num1+num2;
    return result;
} 


const result = addTwoNumbers(2,5);
console.log("result: ", result);