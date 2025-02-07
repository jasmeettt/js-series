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

// function addTwoNumbers (num1,num2){ // this brackets are called parameters
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


function loginUserMessage(username /*= "sam"*/){ // we can use  this (eg: sam ) as a default value
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
// console.log(loginUserMessage());


function calcCartPrice(...num1){
    return num1;
}

// console.log(calcCartPrice(200,300,400))

const user = {
    useranme: "hitesh",
    price : 122,
}

function handleObject (any){
    return (`${any.username} is the name and ${any.price} is the course fees`)
}

// console.log(handleObject(user))
// console.log(handleObject({username : "hero", price : 123}))


const myNewArray =[200, 300, 400,500]

function secondValue(any){
return any[1];
}

// console.log(secondValue(myNewArray))

// udemy 

function orderTea (teatype){
    function confirmOrder (){
        return ` order confirmed for ${teatype}`
    }
    return confirmOrder()
}

const yourOrder = orderTea("Black tea")
// console.log(yourOrder);


const calculateTotal = (price, quantity) => price * quantity; // this is how we write a single line function.(called as implict retrun)

let totalCost = calculateTotal (234,2);
// console.log(totalCost);


