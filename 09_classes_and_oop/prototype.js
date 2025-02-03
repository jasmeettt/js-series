let myName = "jasmeet       ";
let mychannel = "chai         ";

// console.log(myName.trim().length) // low iq way of doing (not really sir was explaining prototype)
Object.prototype.trueLength = function(){
    console.log(`True length is ${this.trim().length}`)
    console.log(`${this}`)
}

myName.trueLength()
"hitesh   ".trueLength()






let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}