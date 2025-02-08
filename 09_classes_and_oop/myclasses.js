// class user{
//     constructor(username, password, email){
//         this.username =username;
//         this.email =email;
//         this.password = password;
//     }
//     encrpytPassword(){ // this is basically a function but here in classes we dont need to mention that it is function
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return(this.username.toUpperCase())
//     }
// }

// const bi = new user("bingo", "123", "bingo@bi.com");

// console.log(bi.encrpytPassword())
// console.log(bi.changeUserName())
// this is all we did with classes

//now the behind the scenes of how classes would work.

// function user(username, password, email){
//         this.username =username;
//         this.email =email;
//         this.password = password;
// }

// user.prototype.encrpytPassword = ()=>{
//     return `${this.password}abc`
// }

// user.prototype.changeUserName = ()=>{
//     return `${this.username.toUpperCase()}`
// }


// let bi = new user("Bingo", "123", "bi@bingo.com")
// console.log(bi.encrpytPassword())
// console.log(bi.changeUserName())


// function person (name, age){
//     this.name = name;
//     this.age = age
// }

// const jasmeet = new person("jasmeet", 20)
// // console.log(jasmeet);

// function tea(type){
//     this.type = type;
//     this.describe = ()=>{
//         return `this is a cup of ${this.type}`
//     }
// }

// const green = new tea("green tea")
// // console.log(green)
// // console.log(green.describe())

// function animal (species){
//     if (!new.target) {                                       
//         throw new Error(`Enter "new" keyword`);               // throw error keyword
        
//     }
//     this.species = species
// }

// let dog = new animal("dog")
// let cat =  animal("cat")


//Inheritence
class BankAccount {
    #balance = 0   // this variable will not be availble to visit to anyone(If want to access need to provide custom method)
    
    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount();
//console.log(account.balance)   // this will give an error as we made the balance var not visible to anyone outside class
// console.log(account.deposit(344));
// console.log(account.deposit(344));
// console.log(account.getBalance());


// Abstraction

class CoffeeMachine{

    start(){                   // abstraction doesnt shows the user things that are irrevelent to them
        // call DB           
        // filter value 
        return`Starting to Maachine...`
    }
    BreCoffee(){
        // complex calculation
        return `Brewing Coffee...`
    }

    PressButton (){
        let msgOne = this.start();
        let msgTwo = this.BreCoffee();
        return `${msgOne} / ${msgTwo}`
    }
}

let person = new CoffeeMachine();
// console.log(person.PressButton())

//polymorphism
//poly means Many 
//morphism means structure

class Bird {
    fly(){
        return `flying...`
    }
}
class penguin extends Bird {
    fly(){
        return `penguin can't fly`
    }
}

let Sparrow = new Bird();
let Penguin = new penguin();

//console.log(Sparrow.fly())
//console.log(Penguin.fly())       //this is a example of polymorphism