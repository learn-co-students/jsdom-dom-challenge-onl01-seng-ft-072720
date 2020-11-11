const timer = document.querySelector("#counter")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const heart = document.querySelector("#heart")
const pause = document.querySelector("#pause")
const likes = document.querySelector(".likes")
const commentForm = document.querySelector("#comment-form")


let timevar = setInterval(startTimer, 1000)

function startTimer() {
    // debugger
    timer.textContent++
}


minus.addEventListener('click', function() {
    timer.textContent -= 1
})

plus.addEventListener('click', function() {
    ++timer.textContent
})

heart.addEventListener('click', function() {
    let getnum = document.getElementById("counter").innerText
    // if (getnum ==== getnum) {
    //     let numOfLikes = getnum.count++
    // }

    likes.innerHTML += `<li> 
        ${getnum} has been liked
        
    </li>`

})


function disableButtons() {
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
}

function enableButtons() {
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
}

 pause.addEventListener("click", function() {
     clearInterval(timevar)
        disableButtons()
       pause.id = 'Resume'
       const resume = document.querySelector("#resume")
       resume.innerText = "resume"

       resume.addEventListener("click", function() {
        setInterval(startTimer, 1000)
        enableButtons()
        resume.id = 'pause'
        pause.innerText = "pause"
       })
})

commentForm.addEventListener("submit", function(event){
    event.preventDefault()
    const text = document.querySelector("#comment-input").value
    let commList = document.querySelector("#list")
    debugger
    commList.innerHTML += `
    <ul> <li>${text}</li> </ul>`

    commentForm.reset()
}) 