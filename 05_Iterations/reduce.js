// reduce()

const myNums = [122,234,345,456,567];

let initVal = 0;
const myTotal = myNums.reduce((acc, curval)=>{
    // console.log(`accumlative value: ${acc}, current value: ${curval}`);
    //this is to check how thw loop is working
    
    return acc + curval
},initVal)
// console.log(myTotal); 
   

const shopingCart = [
    {
        itemName: "JavaScript Course",
        price: 599
    },
    {
        itemName: "Python Course",
        price: 799
    },
    {
        itemName: "APIs Course",
        price: 999
    }
];

const total = shopingCart.reduce((a,n)=>{
    return a + n.price;
},0)
console.log(total);

