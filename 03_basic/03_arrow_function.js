const user = {
    username : "jasmeet",
    price : 123,
    welcomeMessage : function (){
        console.log(`${this.username}, welcome to website`);
        
    }
}
// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

// console.log(this); // in node environment output comes as empty object {}, while in browser it comes as window // imp interview ques
 
// function one (){ // (this) function only works in objects
//     const username = "jasmeet"
//     console.log(this.username);
    
// }

// const one = function (){ 
//     const username = "jasmeet"
//     console.log(this.username);
    
// }
// one();

//arrow function
const one = () => { 
    const username = "jasmeet"
    console.log(this);
    
}
// one();



// const addtwo = (num1,num2) => {  // basic (explict) arrow function
//     return num1 + num2;
// }


// const addtwo = (num1,num2) => (num1 + num2); // this is called as implict return
// can use rounded brackets to contain the code on the right side, but if we use curly brackets instead of rounded we need to specify the return word.


const addtwo = (num1,num2) => ({username : "jasmeet",age : 18,add: "mumbai"}); // **this is how we return a object in arrow function
// console.log(addtwo(1,7));







