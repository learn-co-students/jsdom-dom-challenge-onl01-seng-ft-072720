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


document.getElementById("heart").addEventListener("click", function(){
    let like = document.querySelector(".likes")

    if(document.getElementById(`Li${counter}`) == null){
      let li = document.createElement("li");
      li.setAttribute("id", `Li${counter}`)
      li.innerHTML = `${counter} have this many likes:1`
      like.appendChild(li)
    }
    else {
      let li = document.getElementById(`Li${counter}`)
      let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
      li.innerHTML = `${counter.innerText} have this many likes:${splitted}`
      like.appendChild(li)
    }

  })

  document.querySelector("input").addEventListener("submit",function(a){
    a.preventDefault()
    let b=this.children[0]
    let c=b.value;
    b.value="";
    let d=document.querySelector(".comments")
    let e=document.createElement("p")
    e.innerText=c
    d.appendChild(e)
  }) 