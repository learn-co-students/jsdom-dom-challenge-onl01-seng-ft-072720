let counter = 0;
let bePaused = true;


document.addEventListener('DOMContentLoaded', (event) => {
    let counterDisplay = document.querySelector("#counter");
    let timerID = setInterval(theTimer, 1000); 

    const pauseButton = document.querySelector("#pause");
    const minusButton = document.querySelector("#minus");
    const plusButton = document.querySelector("#plus");
    const heartButton = document.querySelector("#heart");

    const commentForm = document.querySelector("#comment-form")
    const commentInput = document.querySelector("#comment-input")
    const commentList = document.querySelector("#list")    

    pauseButton.addEventListener("click", pauseTimer);
    minusButton.addEventListener("click", minusTimer);
    plusButton.addEventListener("click", plusTimer);
    heartButton.addEventListener("click", likeNumber);
    commentButton.addEventListener("click", createComment);

    function theTimer() {
        counterDisplay.innerText = ++counter;        
    }

    function pauseTimer() {
        if (bePaused === true) {
        disableButtons();
        pause();
        pauseButton.innerText = "resume";
        } else {
            resume();
            enableButtons();
            pauseButton.innerText = "pause"
        }
        bePaused = !bePaused;
    }

    function minusTimer() {
        pause();
        counterDisplay.innerText = --counter;
        resume();
    }

    function plusTimer() {
        pause();
        counterDisplay.innerText = ++counter;
        resume();
    }

    function disableButtons() {
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
    }

    function enableButtons() {
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
    }

    function pause(){
        clearInterval(timerID);
    }

    function resume() {
        timerID = setInterval(theTimer, 1000);
    }

    function likeNumber() {
        console.log(`liked ${counter}`)
        let div = document.querySelector("body > div");
        let p = document.createElement("p");
        let likeText = document.getElementById(`${counter}`);

        if (likeText === null) {
            p.id=`${counter}`;
            p.innerText = `1 person liked the number ${p.id}`;
            div.prepend(p);
        } else {
            let numLikes = likeText.innerText.substring(0,1);
            ++numLikes;
            likeText.innerText = `${numLikes} people liked the number ${likeText.id}`
        }
    }

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

