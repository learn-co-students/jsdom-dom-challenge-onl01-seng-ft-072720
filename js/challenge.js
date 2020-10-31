  
document.addEventListener("DOMContentLoaded", () => {
    const counter = document.querySelector("#counter");
    const minusButton = document.querySelector("#minus");
    const plusButton = document.querySelector("#plus");
    const heartButton = document.querySelector("#heart");    
    const commentForm = document.querySelector("#comment-form");
    const commentInput = document.querySelector("#comment-input");
    const commentList = document.querySelector("#list");
     
    heartButton.addEventListener("click", likeNumber);     
    
    let isPaused = false;    
    let myVar = setInterval(timer, 1000);
    
    function timer() {
        if (!isPaused) {
            counter.textContent++;
            }
        }
        minusButton.addEventListener("click", function() {
            counter.textContent--;
        })
    
        plusButton.addEventListener("click", function() {
            counter.textContent++;
        })
    
    
    commentForm.addEventListener("submit", function(event){
        event.preventDefault();
        createComment();
        })
    
    
    function createComment(){
        let li = document.createElement("li");
        li.innerHTML = commentInput.value;
        
        commentList.append(li);
        commentForm.reset();
    }    
});
    
function likeNumber() {
    console.log(`liked ${counter}`)
    let div = document.querySelector("body > div");
    let p = document.createElement("p");
    let likeText = document.getElementById(`${counter}`);
    if (likeText === null) {
         p.id=`${counter}`;
        p.innerText = "1 person liked the number ";
        div.prepend(p);
    } else {
        let numLikes = likeText.innerText.substring(0,1);
        ++numLikes;
        likeText.innerText = `${numLikes} people liked the number `
        }
    }
    
    let isPaused = false;

    const pauseButton = document.querySelector("#pause");
    const minusButton = document.querySelector("#minus");
    const plusButton = document.querySelector("#plus");
    const heartButton = document.querySelector("#heart");

    pauseButton.addEventListener("click", function(){
        if (!isPaused) {
            isPaused = true;
            pauseButton.innerText = "resume"
            minusButton.disabled = true;
            plusButton.disabled = true;
            heartButton.disabled = true;
        } else {
            isPaused = false;
            pauseButton.innerText = "pause"
            minusButton.disabled = false;
            plusButton.disabled = false;
            heartButton.disabled = false;
        }
})