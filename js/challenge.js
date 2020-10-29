let counter = 0;

window.addEventListener('DOMContentLoaded', (event) => {
    displayTimer();
    // pauseTimer();
});


 displayTimer();

 function displayTimer() {   
    let timerID = setInterval(myTimer, 1000);

    function myTimer() {
        document.querySelector("#counter").innerText = counter++
        pauseTimer();
    }

    function pauseTimer() {
        pauseButton = document.querySelector("#pause");
        pauseButton.addEventListener("click", function(event) {
            clearInterval(timerID);
        })
     }
 }

 