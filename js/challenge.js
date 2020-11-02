const form = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")
const list = document.getElementById("list")
const like = document.getElementById("heart")
// const likes = document.getElementsByClassName("likes")
const counter = document.getElementById("counter")
let seconds = parseInt(counter.innerText)
var increment = setInterval(incrementSeconds, 1000)
let isPaused = false
const pause = document.getElementById("pause")
const resume = document.getElementById("resume")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const submit = document.getElementById("submit")



form.addEventListener("submit", function(e) {
    e.preventDefault()
    listComment()
    clearcommentField()
})

pause.addEventListener("click", function(e) {
    if (!isPaused) {
        pauseTimer();
     } else {
        resumeTimer();
    }
});

//As a user, I can manually increment and decrement the counter using the plus 
//and minus buttons.
plus.addEventListener("click", function(e) {
    seconds += 1
    plus.innerText = seconds
});

minus.addEventListener("click", function(e) {
    seconds += 1
    minus.innerText = seconds
});

like.addEventListener("click", function(e) {
    addLike()
});

//As a user, I should see the timer increment every second once the page has loaded.
function incrementSeconds() {
    if(!isPaused) {
    seconds += 1;
    counter.innerText = seconds
    }
}
//As a user, I can pause the counter, which should
//the pause button should then show the text "resume."
function pauseTimer() {
    isPaused = true
    pause.innerText = "resume"
    minus.disabled = true;
    plus.disabled = true;
    like.disabled = true;
    submit.disabled = true;
    incrementSeconds()
}
//When 'resume' is clicked, it should restart the counter and re-enable the buttons.
function resumeTimer() {
    isPaused = false
    pause.innerText = "pause"
    minus.disabled = false;
    plus.disabled = false;
    like.disabled = false;
    submit.disabled = false;
    incrementSeconds()
}
//As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
function listComment() {
    const addComment = document.createElement('li');
    addComment.innerText = commentInput.value;
    list.appendChild(addComment);
}

function clearcommentField() {
    commentInput.value = ""
}

//As a user, I can 'like' an individual number of the counter. I should see count 
//of the number of 'likes' associated with that number.
function addLike() {
    let count = 0
    let likes = document.querySelector(".likes")
    const addLikeLi = document.createElement('li')
    addLikeLi.innerText = counter.innerText + ` has been liked ${count + 1} time`
    likes.appendChild(addLikeLi)
}