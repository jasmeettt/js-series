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


function person (name, age){
    this.name = name;
    this.age = age
}

const jasmeet = new person("jasmeet", 20)
// console.log(jasmeet);

function tea(type){
    this.type = type;
    this.describe = ()=>{
        return `this is a cup of ${this.type}`
    }
}

const green = new tea("green tea")
// console.log(green)
// console.log(green.describe())

function animal (species){
    if (!new.target) {                                       
        throw new Error(`Enter "new" keyword`);               // throw error keyword
        
    }
    this.species = species
}

let dog = new animal("dog")
let cat =  animal("cat")


