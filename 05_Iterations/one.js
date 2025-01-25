// For Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5 ) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Value: ${i}`);
    
    for (let j = 1; j <= 10; j++) { 
    // console.log(`Inner Loop Value: ${j} and inner loop: ${i}`);
    // console.log( i + "*" + j + "=" + i*j)
    }
}
for (let i = 1; i <= 10; i++) {
    // console.log(`Table of: ${i}`);
    // console.log(`*`);

    for (let j = 1; j <= 10; j++) { 
    // console.log(`Inner Loop Value: ${j} and inner loop: ${i}`);
    // console.log(`^`)
    }
}


let myArr = ["Batman", "Superman", "Flash"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);  
}

// Break and Continue

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
//     if(i == 5){                            
//         console.log("detected 5");
//         break;                             // BREAK STATEMENT
//     }
// }


for (let i = 1; i <= 10; i++) {
    if(i == 5){                            
        console.log("detected 5");
        continue;                             // CONTINUE STATEMENT
    }
    console.log(i);
}



