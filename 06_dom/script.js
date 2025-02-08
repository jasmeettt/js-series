//challenge 1
document.getElementById("changeTextButton").
addEventListener("click",function(){
document.getElementById('myParagraph').innerHTML = "this is new test"
});

//challenge 2
document.getElementById('highlightFirstCity').addEventListener("click", function (){
    const city = document.getElementById('citiesList');
    city.firstElementChild.classList.add("highlight")
})

//challenge 3
document.getElementById('changeOrder').addEventListener("click",function(){
    document.getElementById('coffeeType').textContent = "Espresso"
})

//challenge 4
document.getElementById('addNewItem').addEventListener("click",function(){
    const li = document.createElement('li');
    li.textContent = "Eggs";
    document.getElementById('shoppingList').appendChild(li)
})

//challenge 5
document.getElementById('removeLastTask').addEventListener("click", function(){
    const taskList = document.getElementById('taskList')
    taskList.lastElementChild.remove()
})


