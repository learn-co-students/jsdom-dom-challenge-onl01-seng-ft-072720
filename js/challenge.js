
let count = document.getElementById("counter")
var intervalID = window.setInterval(myCallback, 1000);

function myCallback()
{
 let cInt = parseInt(count.innerText)
 count.innerText = cInt += 1;
}

document.getElementById("pause").addEventListener("click", function(event){
    clearInterval(intervalID)
})

document.getElementById("plus").addEventListener("click", function(event){
    let cInt = parseInt(count.innerText)
    count.innerText = cInt += 1;
})

document.getElementById("minus").addEventListener("click", function(event){
    let cInt = parseInt(count.innerText)
    count.innerText = cInt -= 1;
})

document.getElementById("heart").addEventListener("click", function(event){
    let cInt = parseInt(count.innerText)
    
})