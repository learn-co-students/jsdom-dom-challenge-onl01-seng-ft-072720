let counter = 0;
let timerSwitch = true;

window.addEventListener('DOMContentLoaded', (event) => {
    let counterDisplay = document.querySelector("#counter");
    const pauseButton = document.querySelector("#pause");
    const minusButton = document.querySelector("#minus");
    const plusButton = document.querySelector("#plus");
    const heartButton = document.querySelector("#heart");
    let timerID = setInterval(myTimer, 1000);


 function myTimer() {
    counterDisplay.innerText = counter++;
}

pauseButton.addEventListener("click", pauseTimer);
minusButton.addEventListener("click", minusTimer);
plusButton.addEventListener("click", plusTimer);
heartButton.addEventListener("click", likeNumber);


function pauseTimer() {
    if (timerSwitch === true) {
    disableButtons();
    pause();
    pauseButton.innerText = "resume";
    } else {
        resume();
        enableButtons();
        pauseButton.innerText = "pause"
    }
    timerSwitch = !timerSwitch;
}

function minusTimer() {
    // pause and resume are to remove clumsiness
    pause();
    counterDisplay.innerText = counter--;
    resume();
}

function plusTimer() {
    // pause and resume are to remove clumsiness
    pause();
    counterDisplay.innerText = counter++;
    resume();
}

function disableButtons() {
    minusButton.removeEventListener("click", minusTimer);
    plusButton.removeEventListener("click", plusTimer);
}

function enableButtons() {
    minusButton.addEventListener("click", minusTimer);
    plusButton.addEventListener("click", plusTimer);
}

function pause(){
    clearInterval(timerID);
}

function resume() {
    timerID = setInterval(myTimer, 1000);
}

function likeNumber() {
    console.log(`liked ${counter}`)
}





});



 