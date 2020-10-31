// let counter = document.getElementById("counter")
// while ()
// h1.setTimeout(
//     function()
// )

const count = document.getElementById("counter")
let num = Number(count.innerText)
const addButton = document.getElementById("plus")
const subButton = document.getElementById("minus")
const likeButton = document.getElementById("heart")
const ulLikes = document.querySelector("ul.likes")
const commentDiv = document.getElementById("list")
const pauseButton = document.getElementById("pause")
const submitButton = document.getElementById("submit")

let counterSet = setInterval(function(){
    num += 1;
    count.innerText = num.toString();
}, 1000)

addButton.addEventListener("click",
function(e){
    num++;
    count.innerText = num.toString();
})

subButton.addEventListener("click",
function (e){
    num--;
    count.innerText = num.toString();
})

likeButton.addEventListener("click",
function (e){
    let likeCount = currentNum;
    const li = document.createElement("li")
    li.textContent = `${num} has been liked <span>``</span> times`
    ulLikes.appendChild(li)
})

const commentForm = document.getElementById("comment-form")
commentForm.addEventListener("submit", function(e){
  e.preventDefault()
  let comment = document.getElementById("comment-input").value
  const p = document.createElement("p")
  p.textContent = `${comment}`
  commentDiv.appendChild(p)
}
)

pauseButton.addEventListener("click",
function (e){
        clearInterval(counterSet)
        pauseButton.textContent = "resume"
        addButton.disabled = true;
        subButton.disabled = true;
        likeButton.disabled = true;
        submitButton.disabled = true;
})