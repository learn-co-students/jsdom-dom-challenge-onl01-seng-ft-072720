document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const pauseBtn= document.getElementById("pause")
    // the abve is for the counter
    const newLike = document.getElementById("heart");
    const likes = document.getElementsByClassName("likes")[0]
    // the above is for the likes
    const comments = document.getElementById("list");
    const newCommentContent = document.getElementById("comment-input")
    const submit = document.getElementById("submit")
    // the above is for the comments
    let speedCounter = setInterval(startCounter, 1000)
    function continueFunction(){
        counter.innerText++;
    };
    function pauseCounter() {
            clearInterval(speedCounter);
            startCounter = false;
            pause.innerHTML = "resume";
            newLike.disabled = true;
            minus.disabled = true;
            plus.disabled = true;
            submit.disabled = true;
            newCommentForm.disabled = true;
            pauseBtn.removeEventListener("click", pauseCounter)
            pauseBtn.addEventListener("click", playCounter)
    function playCounter() {
            let speedCounter = setInterval(continueFunction, 1000)
            startCounter = true;
            pause.innerHTML = "pause"
            newLike.disabled = false;
            minus.disabled = false;
            plus.disabled = false;
            submit.disabled = false;
            newCommentForm.disabled = false;
            pauseBtn.addEventListener("click", pauseCounter)
            pauseBtn.removeEventListener("click", playCounter)
          };
        };
    
    startCounter();
    plus.addEventListener("click", plusCounter);
    minus.addEventListener("click", minusCounter);
    pauseBtn.addEventListener("click", pauseCounter);
    newLike.addEventListener("click", addHearts);
    submit.addEventListener("click", addComment);
  });

function startCounter() {
    const counter = document.getElementById("counter");
    counter.innerHTML++
};
function plusCounter() {
    const counter = document.getElementById("counter");
    counter.innerHTML++
};
function minusCounter() {
    const counter = document.getElementById("counter");
    counter.innerHTML--
};
function addHearts() {
    const newLi = document.createElement("li")
    newLi.innerText = `${counter.innerText} has been liked`
    likes.appendChild(newLi)
};
const addComment = event => {
    event.preventDefault();
    const newCommentContent = document.getElementById("comment-input")
    const newComment = document.createElement("li");
    newComment.innerText = newCommentContent.value;
    newCommentAppend(newComment);
  };
  function newCommentAppend(comment) {
    document.getElementsByClassName("comments")[0].appendChild(comment);
  }