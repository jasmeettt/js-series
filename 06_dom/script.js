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

//challenge 6 
document.getElementById("clickMeButton").addEventListener('mouseover',function (){
    alert("Mouse got hovered this button")
})

//challenge 7
document.getElementById('teaList').addEventListener("click",function(e){
    if (e.target && e.target.matches('.teaItem')) {
        alert("you selected "+ e.target.textContent)
    }
})

//challenge 8
document.getElementById('feedbackForm').addEventListener("submit",function(e){
    e.preventDefault();
    const feedback = document.getElementById('feedbackInput').value
    // console.log(feedback)\
    document.getElementById('feedbackDisplay').innerHTML = feedback;
})

//challenge 9
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById('domStatus').textContent ="DOM fully loaded"
})

// challenge 10
document.getElementById('toggleHighlight').addEventListener("click", function(){
    let text = document.getElementById('descriptionText')
    // console.log(text)
    text.classList.toggle('highlight')
})