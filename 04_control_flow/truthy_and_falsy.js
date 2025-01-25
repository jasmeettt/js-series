// truthy and falsy values

// truthy value:
// true, "0", "false", " " (blank space), [], {}, function(){}

// falsy values:
// false, 0, -0, BigInt (0n), "", null, undefined, NaN

const userEmail = [];
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email");
    
}

if(userEmail.length === 0){
    console.log("array is empty");
    
}

const empObj = {};
if (Object.keys(empObj).length === 0){
    console.log("obj is empty");
    
}