let counter = 0;
let timerSwitch = true;

window.addEventListener('DOMContentLoaded', (event) => {
    const pauseButton = document.querySelector("#pause");
    let timerID = setInterval(myTimer, 1000);


 function myTimer() {
    document.querySelector("#counter").innerText = counter++;
}

pauseButton.addEventListener("click", pauseTimer);

function pauseTimer() {
    if (timerSwitch === true) {
    console.log("paused");
    clearInterval(timerID);
    pauseButton.innerText = "resume";
    } else {
        timerID = setInterval(myTimer, 1000);
        console.log("resume");
        pauseButton.innerText = "pause"
    }
    timerSwitch = !timerSwitch;
}





});



 