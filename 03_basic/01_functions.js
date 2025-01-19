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
    // let result = num1+num2;  // one way of doing
    // return result;

    return num1+ num2;
} 


const result = addTwoNumbers(2,15);
// console.log("result: ", result);


function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("please enter Real Value"); // way of writing 
    //     return;
        
    // }
    
    if(!username){ // can also be written like this
        console.log("please enter Real Value");
        return;
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Jasmeet"));
console.log(loginUserMessage());
