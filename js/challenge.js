    const pauseButton = document.querySelector("#pause");
    const minusButton = document.querySelector("#minus");
    const plusButton = document.querySelector("#plus");
    const counter = document.querySelector("#counter");
    const likeButton = document.querySelector("#heart");
    const likeList = document.querySelector(".likes");
    const commentForm = document.querySelector("#comment-form");
    const commentButton = document.querySelector("#submit");
    const userInput = document.querySelector("#comment-input");
    const commentList = document.querySelector(".comments");
    let isPaused = false;

    let timer = setInterval(incrementTimer, 1000)

    function incrementTimer() {
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

    function addLike() {

        if (document.querySelector(`#li-${counter.textContent}`) != null) {
            const parsedNum = parseInt(document.querySelector(`#li-${counter.textContent} span`).innerText) + 1;
            document.querySelector(`#li-${counter.textContent} span`).innerText = parsedNum
            if (document.querySelector(`#li-${counter.textContent} span`).innerText === "2") {
                document.querySelector(`#li-${counter.textContent}`).innerHTML += "s"
            }
            
        } else {
        likeList.innerHTML += `<li id="li-${counter.textContent}">${counter.textContent} has been liked <span>1</span> time</li>`
        }
    }

    likeButton.addEventListener("click", function() {
        addLike();
    })

    function addComment() {
        commentList.innerHTML += `<p>${userInput.value}</p>`
        commentForm.reset()
    }

    commentForm.addEventListener("submit", function(e) {
        e.preventDefault();
        addComment();
    })

    pauseButton.addEventListener("click", function() {
        if (!isPaused) {
            isPaused = true;
            pauseButton.innerText = "resume"
            minusButton.disabled = true;
            plusButton.disabled = true;
            likeButton.disabled = true;
        } else {
            isPaused = false;
            pauseButton.innerText = "pause"
            minusButton.disabled = false;
            plusButton.disabled = false;
            likeButton.disabled = false;
        }
    })


