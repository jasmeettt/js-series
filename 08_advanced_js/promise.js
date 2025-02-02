const promiseOne = new Promise(function(resolve, reject){
    //Do and async task
    //DB calls, cryptography,network
    setTimeout(() => {
        console.log("Async task is completed");
        resolve();
    }, 1000);
});

promiseOne.then(()=>{
    console.log("Promise consumed")
});

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@ajs.com"})
    },1000)
})  
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username:"jasmeet",email:"jas@gmail.com",
                password:123
            });
        }else{
            reject("ERROR: there is an error");
        }
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("the promsie has been either resovled or rejected");
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username:"javascript",email:"js@gmail.com",
            password:123
            });
        }else{
            reject("ERROR: there is an error");
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive();

async function allUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonplaceholder = await (response).json();
    console.log(jsonplaceholder);
    } catch (error) {
        console.log("E: ", error)
    }
}

allUser();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((response)=>{
    console.log(response);
})
.catch((error)=> console.log(error))
.finally(()=> console.log("Its either resolved or rejected"))