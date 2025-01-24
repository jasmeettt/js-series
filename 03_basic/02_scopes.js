if (true){
    let a = 1;
    const b = 2;
    var c = 3;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one () { 
    const username = " hitesh";

    function two(){
        const website = "youtube";
        // console.log(username);
    }
    two();
    // console.log(website);
}
one();

if (true){
    const username = "jasmeet";
    if (username === "jasmeet") {
        const website = " youtube";
        // console.log(username + website);
        
    }
    // console.log(website);
    // console.log(username);
}


// ++++++++++++++++++ intersting +++++++++++++++++

addOne(5);
function addOne (num) { // we can use this function before initialization
    return num + 1; 
}
 


addTwo(5);
const addTwo = function (num){ // we cannot use this function before initialization
     return num + 2; 
}


