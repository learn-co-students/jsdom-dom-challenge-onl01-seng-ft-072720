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

let counterSet = setInterval(
    function() {
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
    const li = document.createElement("li")
    li.hasAttribute('data-num');
    li.getAttribute('data-num');
    li.setAttribute('data-num', num); 
    li.textContent = `${num} has been liked`
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
    switch (pauseButton.textContent){
        case " pause ":
        clearInterval(counterSet);
        pauseButton.textContent = " resume "
        addButton.disabled = true;
        subButton.disabled = true;
        likeButton.disabled = true;
        submitButton.disabled = true;
        break;
        case " resume ":
        counterSet = setInterval(
            function() {
                num += 1;
                count.innerText = num.toString();
            }, 1000)
        pauseButton.textContent = " pause "
        addButton.disabled = false;
        subButton.disabled = false;
        likeButton.disabled = false;
        submitButton.disabled = false;
        break;
    }
})
